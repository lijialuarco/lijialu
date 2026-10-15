'use client';

import { Line, Sparkles, Stars } from '@react-three/drei';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import {
  CSSProperties,
  startTransition,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import * as THREE from 'three';
import { SUBSITES, Subsite } from '@/lib/subsites';

type OrbitSpec = {
  radius: number;
  vertical: number;
  depth: number;
  eccentricity: number;
  speed: number;
  phase: number;
  rotation: [number, number, number];
};

const ORBIT_FOCUS: [number, number, number] = [1.45, 0.08, -0.35];

const ORBITS: Record<string, OrbitSpec> = {
  cpa: {
    radius: 5.1,
    vertical: 2.15,
    depth: 3.0,
    eccentricity: 0.2,
    speed: 0.19,
    phase: 3.28,
    rotation: [-0.09, -0.2, 0.12],
  },
  tubao: {
    radius: 5.95,
    vertical: 3.05,
    depth: 3.55,
    eccentricity: 0.24,
    speed: -0.145,
    phase: 0.5,
    rotation: [0.24, -0.3, -0.18],
  },
  english: {
    radius: 3.55,
    vertical: 1.55,
    depth: 2.25,
    eccentricity: 0.12,
    speed: 0.24,
    phase: 2.05,
    rotation: [0.12, -0.46, 0.27],
  },
};

const PLANET_VERTEX_SHADER = /* glsl */ `
  varying vec3 vObjectPosition;
  varying vec3 vViewNormal;

  void main() {
    vObjectPosition = normalize(position);
    vViewNormal = normalize(normalMatrix * normal);
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`;

const PLANET_FRAGMENT_SHADER = /* glsl */ `
  uniform vec3 uColorA;
  uniform vec3 uColorB;
  uniform vec3 uAccent;
  uniform float uTime;
  uniform float uVariant;
  uniform float uActive;

  varying vec3 vObjectPosition;
  varying vec3 vViewNormal;

  void main() {
    vec3 position = normalize(vObjectPosition);
    vec3 normal = normalize(vViewNormal);
    float wave = sin(position.x * 6.0 + position.z * 3.5 + uTime * 0.08);
    float gradient = smoothstep(-0.92, 0.92, position.y + wave * 0.07);
    vec3 color = mix(uColorA, uColorB, gradient);

    if (uVariant < 0.5) {
      float etching = pow(
        0.5 + 0.5 * cos((position.y + position.x * 0.14) * 24.0),
        34.0
      );
      color = mix(color, uAccent, etching * 0.13);
    } else if (uVariant < 1.5) {
      float mistCenter = position.y + position.x * 0.28 +
        sin(position.z * 2.8 + uTime * 0.09) * 0.16;
      float softBand = 1.0 - smoothstep(0.1, 0.46, abs(mistCenter));
      float breakup = smoothstep(
        0.34,
        0.74,
        0.5 + 0.5 * sin(
          position.x * 2.4 + position.z * 4.6 - uTime * 0.055
        )
      );
      float memoryMist = softBand * mix(0.38, 1.0, breakup);
      color = mix(color, uAccent, memoryMist * 0.13);
    } else {
      float silverField = smoothstep(
        0.05,
        0.74,
        position.x * 0.78 + position.z * 0.32
      );
      float silverGroove = pow(
        0.5 + 0.5 * cos((position.y + position.x * 0.2) * 11.0),
        42.0
      );
      color = mix(color, uAccent, silverField * 0.43);
      color = mix(color, vec3(0.58, 0.61, 0.64), silverGroove * 0.3);
    }

    float diffuse = 0.42 + 0.58 * max(
      dot(normal, normalize(vec3(-0.38, 0.56, 0.73))),
      0.0
    );
    float fresnel = pow(
      1.0 - max(dot(normal, vec3(0.0, 0.0, 1.0)), 0.0),
      2.4
    );
    color *= mix(0.72, 1.1, diffuse);
    color += uAccent * fresnel * (0.08 + uActive * 0.1);
    color *= 1.0 + uActive * 0.1;

    gl_FragColor = vec4(color, 1.0);
  }
`;

function planetRadius(sizeLevel: number) {
  const normalized = (THREE.MathUtils.clamp(sizeLevel, 1, 9) - 1) / 8;
  return THREE.MathUtils.lerp(0.2, 0.78, normalized);
}

function useMediaQuery(query: string) {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(query);
    const update = () => setMatches(media.matches);
    update();
    media.addEventListener('change', update);
    return () => media.removeEventListener('change', update);
  }, [query]);

  return matches;
}

function CameraRig({ travelling }: { travelling: boolean }) {
  const { camera, pointer } = useThree();
  const originalZ = useRef(9.2);

  useFrame((_, delta) => {
    const perspective = camera as THREE.PerspectiveCamera;

    if (travelling) {
      camera.position.z = THREE.MathUtils.damp(
        camera.position.z,
        -11,
        3.1,
        delta,
      );
      camera.position.x = THREE.MathUtils.damp(
        camera.position.x,
        1.2,
        2.4,
        delta,
      );
      perspective.fov = THREE.MathUtils.damp(perspective.fov, 82, 3.2, delta);
    } else {
      camera.position.x = THREE.MathUtils.damp(
        camera.position.x,
        pointer.x * 0.14,
        2.2,
        delta,
      );
      camera.position.y = THREE.MathUtils.damp(
        camera.position.y,
        0.25 + pointer.y * 0.09,
        2.2,
        delta,
      );
      camera.position.z = THREE.MathUtils.damp(
        camera.position.z,
        originalZ.current,
        2.2,
        delta,
      );
      perspective.fov = THREE.MathUtils.damp(perspective.fov, 43, 2.2, delta);
    }

    perspective.updateProjectionMatrix();
  });

  return null;
}

function OrbitFragments({ spec, color }: { spec: OrbitSpec; color: string }) {
  const fragments = useMemo(() => {
    const ranges = [
      [0.02, 0.47],
      [0.54, 0.98],
    ];

    return ranges.map(([from, to]) => {
      const points: THREE.Vector3[] = [];
      for (let step = 0; step <= 72; step += 1) {
        const progress = from + ((to - from) * step) / 72;
        const angle = progress * Math.PI * 2;
        points.push(
          new THREE.Vector3(
            Math.cos(angle) * spec.radius - spec.radius * spec.eccentricity,
            Math.sin(angle) * spec.vertical,
            -Math.cos(angle) * spec.depth,
          ),
        );
      }
      return points;
    });
  }, [spec]);

  return (
    <group position={ORBIT_FOCUS} rotation={spec.rotation}>
      {fragments.map((points, index) => (
        <Line
          key={index}
          points={points}
          color={color}
          transparent
          opacity={0.105 - index * 0.02}
          lineWidth={0.65}
        />
      ))}
    </group>
  );
}

function PlanetSurface({
  subsite,
  size,
  active,
  paused,
  reducedMotion,
}: {
  subsite: Subsite;
  size: number;
  active: boolean;
  paused: boolean;
  reducedMotion: boolean;
}) {
  const materialRef = useRef<THREE.ShaderMaterial>(null);
  const elapsed = useRef(0);
  const variant =
    subsite.planetStyle === 'rose-ceramic'
      ? 0
      : subsite.planetStyle === 'ocean-glass'
        ? 1
        : 2;
  const uniforms = useMemo(
    () => ({
      uColorA: { value: new THREE.Color(subsite.color) },
      uColorB: { value: new THREE.Color(subsite.secondaryColor) },
      uAccent: { value: new THREE.Color(subsite.accent) },
      uTime: { value: 0 },
      uVariant: { value: variant },
      uActive: { value: 0 },
    }),
    [subsite.accent, subsite.color, subsite.secondaryColor, variant],
  );

  useFrame((_, delta) => {
    if (!materialRef.current) return;
    if (!paused && !reducedMotion) elapsed.current += delta;
    materialRef.current.uniforms.uTime.value = elapsed.current;
    materialRef.current.uniforms.uActive.value = THREE.MathUtils.damp(
      materialRef.current.uniforms.uActive.value,
      active ? 1 : 0,
      5,
      delta,
    );
  });

  return (
    <mesh castShadow receiveShadow>
      {subsite.planetStyle === 'silver-chalk' ? (
        <icosahedronGeometry args={[size, 4]} />
      ) : (
        <sphereGeometry args={[size, 64, 64]} />
      )}
      <shaderMaterial
        ref={materialRef}
        uniforms={uniforms}
        vertexShader={PLANET_VERTEX_SHADER}
        fragmentShader={PLANET_FRAGMENT_SHADER}
      />
    </mesh>
  );
}

function PlanetDetails({
  subsite,
  size,
  active,
}: {
  subsite: Subsite;
  size: number;
  active: boolean;
}) {
  if (subsite.planetStyle === 'rose-ceramic') {
    return (
      <>
        {[
          [Math.PI / 2, 0.08, -0.12],
          [Math.PI / 2.7, -0.24, 0.3],
          [Math.PI / 1.9, 0.42, -0.28],
        ].map((rotation, index) => (
          <mesh key={index} rotation={rotation as [number, number, number]}>
            <torusGeometry args={[size * 1.004, size * 0.008, 8, 128]} />
            <meshStandardMaterial
              color={index === 1 ? '#c8afb2' : '#f5e8e4'}
              metalness={index === 1 ? 0.7 : 0.18}
              roughness={0.4}
              transparent
              opacity={active ? 0.72 : 0.42}
            />
          </mesh>
        ))}
      </>
    );
  }

  if (subsite.planetStyle === 'ocean-glass') {
    return (
      <>
        <mesh scale={1.055}>
          <sphereGeometry args={[size, 48, 48]} />
          <meshBasicMaterial
            color={subsite.accent}
            transparent
            opacity={active ? 0.11 : 0.055}
            blending={THREE.AdditiveBlending}
            side={THREE.BackSide}
          />
        </mesh>
        <mesh position={[size * 1.52, size * 0.52, size * 0.1]}>
          <sphereGeometry args={[size * 0.1, 20, 20]} />
          <meshStandardMaterial
            color="#a4e3df"
            emissive="#367f94"
            emissiveIntensity={active ? 0.48 : 0.18}
            roughness={0.5}
          />
        </mesh>
      </>
    );
  }

  return (
    <>
      <mesh rotation={[1.24, -0.2, 0.38]}>
        <torusGeometry args={[size * 1.005, size * 0.016, 8, 96]} />
        <meshStandardMaterial
          color="#aeb5bb"
          metalness={0.86}
          roughness={0.24}
          transparent
          opacity={active ? 0.9 : 0.62}
        />
      </mesh>
      <mesh position={[size * 1.48, size * 0.42, size * 0.16]}>
        <icosahedronGeometry args={[size * 0.12, 2]} />
        <meshStandardMaterial
          color="#d9dde0"
          metalness={0.78}
          roughness={0.28}
        />
      </mesh>
    </>
  );
}

type PlanetProps = {
  subsite: Subsite;
  spec: OrbitSpec;
  active: boolean;
  paused: boolean;
  reducedMotion: boolean;
  onHover: (subsite: Subsite | null) => void;
  onSelect: (subsite: Subsite) => void;
};

function OrbitingPlanet({
  subsite,
  spec,
  active,
  paused,
  reducedMotion,
  onHover,
  onSelect,
}: PlanetProps) {
  const planetRef = useRef<THREE.Group>(null);
  const visualRef = useRef<THREE.Group>(null);
  const angle = useRef(spec.phase);
  const size = planetRadius(subsite.sizeLevel);

  useFrame((state, delta) => {
    if (!planetRef.current || !visualRef.current) return;

    if (!paused && !reducedMotion) {
      angle.current += delta * spec.speed;
    }

    const x =
      Math.cos(angle.current) * spec.radius - spec.radius * spec.eccentricity;
    const y = Math.sin(angle.current) * spec.vertical;
    const z = -Math.cos(angle.current) * spec.depth;
    planetRef.current.position.set(x, y, z);

    visualRef.current.rotation.y += delta * (reducedMotion ? 0 : 0.16);
    visualRef.current.rotation.x =
      Math.sin(state.clock.elapsedTime * 0.22) * 0.08;

    const activeScale = active ? 1.22 : 1;
    const rightmostX = spec.radius * (1 - spec.eccentricity);
    const nearFactor = THREE.MathUtils.clamp(
      (rightmostX - x) / (2 * spec.radius),
      0,
      1,
    );
    const perspectiveScale = THREE.MathUtils.lerp(0.58, 1.48, nearFactor);
    const scale = THREE.MathUtils.damp(
      visualRef.current.scale.x,
      activeScale * perspectiveScale,
      6,
      delta,
    );
    visualRef.current.scale.setScalar(scale);
  });

  return (
    <group position={ORBIT_FOCUS} rotation={spec.rotation}>
      <group ref={planetRef}>
        <group
          ref={visualRef}
          onPointerOver={(event) => {
            event.stopPropagation();
            onHover(subsite);
          }}
          onPointerOut={(event) => {
            event.stopPropagation();
            onHover(null);
          }}
          onClick={(event) => {
            event.stopPropagation();
            onSelect(subsite);
          }}
        >
          <mesh scale={1.82} visible={false}>
            <sphereGeometry args={[size, 18, 18]} />
            <meshBasicMaterial transparent opacity={0} />
          </mesh>

          <PlanetSurface
            subsite={subsite}
            size={size}
            active={active}
            paused={paused}
            reducedMotion={reducedMotion}
          />
          <PlanetDetails subsite={subsite} size={size} active={active} />

          <mesh scale={1.075}>
            <sphereGeometry args={[size, 36, 36]} />
            <meshBasicMaterial
              color={subsite.accent}
              transparent
              opacity={active ? 0.1 : 0.025}
              blending={THREE.AdditiveBlending}
              side={THREE.BackSide}
            />
          </mesh>

          {active ? (
            <pointLight color={subsite.accent} intensity={1.3} distance={4} />
          ) : null}
        </group>
      </group>
    </group>
  );
}

type UniverseProps = {
  activeSlug: string | null;
  travelling: boolean;
  manualPause: boolean;
  reducedMotion: boolean;
  compact: boolean;
  onHover: (subsite: Subsite | null) => void;
  onSelect: (subsite: Subsite) => void;
};

function Universe({
  activeSlug,
  travelling,
  manualPause,
  reducedMotion,
  compact,
  onHover,
  onSelect,
}: UniverseProps) {
  return (
    <>
      <color attach="background" args={['#02040a']} />
      <fog attach="fog" args={['#02040a', 8, 34]} />
      <ambientLight intensity={0.42} />
      <directionalLight position={[-4, 5, 7]} intensity={1.8} color="#fff7e8" />
      <pointLight position={[6, -4, 2]} intensity={1.2} color="#7b8fff" />

      <Stars
        radius={44}
        depth={28}
        count={compact ? 78 : reducedMotion ? 110 : 165}
        factor={1.55}
        saturation={0}
        fade
        speed={
          manualPause || reducedMotion || compact ? 0 : travelling ? 4.8 : 0.018
        }
      />
      <Sparkles
        count={compact ? 7 : reducedMotion ? 10 : 16}
        scale={[18, 2.4, 10]}
        position={[-1.4, -4.3, -2]}
        size={0.9}
        speed={manualPause || reducedMotion || compact ? 0 : 0.02}
        opacity={0.2}
        color="#aebdd2"
      />

      {SUBSITES.map((subsite) => {
        const spec = ORBITS[subsite.slug];
        return (
          <OrbitFragments
            key={`orbit-${subsite.slug}`}
            spec={spec}
            color={subsite.color}
          />
        );
      })}

      {SUBSITES.map((subsite) => {
        const spec = ORBITS[subsite.slug];
        const active = activeSlug === subsite.slug;
        return (
          <OrbitingPlanet
            key={subsite.slug}
            subsite={subsite}
            spec={spec}
            active={active}
            paused={manualPause || active || travelling}
            reducedMotion={reducedMotion}
            onHover={onHover}
            onSelect={onSelect}
          />
        );
      })}

      <CameraRig travelling={travelling} />
    </>
  );
}

export function PlanetaryHome() {
  const router = useRouter();
  const reducedMotion = useMediaQuery('(prefers-reduced-motion: reduce)');
  const coarsePointer = useMediaQuery('(pointer: coarse)');
  const compact = useMediaQuery('(max-width: 640px)');
  const [activeSlug, setActiveSlug] = useState<string | null>(null);
  const [manualPause, setManualPause] = useState(false);
  const [travellingTo, setTravellingTo] = useState<Subsite | null>(null);
  const clearTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const activeSubsite =
    SUBSITES.find((item) => item.slug === activeSlug) ?? null;

  useEffect(() => {
    SUBSITES.forEach((subsite) => router.prefetch(`/${subsite.slug}`));
  }, [router]);

  useEffect(
    () => () => {
      if (clearTimer.current) clearTimeout(clearTimer.current);
    },
    [],
  );

  const handleHover = useCallback(
    (subsite: Subsite | null) => {
      if (clearTimer.current) clearTimeout(clearTimer.current);
      if (subsite) {
        setActiveSlug(subsite.slug);
      } else if (!coarsePointer) {
        clearTimer.current = setTimeout(() => setActiveSlug(null), 420);
      }
    },
    [coarsePointer],
  );

  const beginJourney = useCallback(
    (subsite: Subsite) => {
      if (travellingTo) return;

      if (coarsePointer && activeSlug !== subsite.slug) {
        setActiveSlug(subsite.slug);
        return;
      }

      setActiveSlug(subsite.slug);
      setTravellingTo(subsite);

      const delay = reducedMotion ? 180 : 1080;
      window.setTimeout(() => {
        startTransition(() => router.push(`/${subsite.slug}`));
      }, delay);
    },
    [activeSlug, coarsePointer, reducedMotion, router, travellingTo],
  );

  const cancelClear = () => {
    if (clearTimer.current) clearTimeout(clearTimer.current);
  };

  return (
    <main
      className={`home-shell${travellingTo ? ' is-travelling' : ''}`}
      style={
        travellingTo
          ? ({ '--travel-color': travellingTo.accent } as CSSProperties)
          : undefined
      }
    >
      <div className="canvas-shell" aria-hidden="true">
        <Canvas
          dpr={compact ? 1 : [1, 1.5]}
          camera={{ position: [0, 0.25, 9.2], fov: 43, near: 0.1, far: 120 }}
          gl={{
            antialias: true,
            alpha: false,
            powerPreference: 'high-performance',
          }}
          onCreated={({ gl }) => {
            gl.toneMapping = THREE.ACESFilmicToneMapping;
            gl.toneMappingExposure = 1.08;
          }}
          onPointerMissed={() => handleHover(null)}
        >
          <Universe
            activeSlug={activeSlug}
            travelling={Boolean(travellingTo)}
            manualPause={manualPause}
            reducedMotion={reducedMotion}
            compact={compact}
            onHover={handleHover}
            onSelect={beginJourney}
          />
        </Canvas>
      </div>

      <div className="grain" aria-hidden="true" />
      <div className="horizon-glow" aria-hidden="true" />
      <div className="cosmic-dust" aria-hidden="true" />
      <div className="space-vignette" aria-hidden="true" />

      <header className="site-header">
        <Link className="wordmark" href="/" aria-label="返回首页">
          <Image
            src="/images/stag-mark-v1.webp"
            alt=""
            width={96}
            height={96}
            priority
          />
        </Link>

        <button
          className="pause-button"
          type="button"
          aria-pressed={manualPause}
          onClick={() => setManualPause((value) => !value)}
        >
          <span
            className={`pause-icon${manualPause ? ' is-paused' : ''}`}
            aria-hidden="true"
          />
          {manualPause ? '继续运行' : '暂停宇宙'}
        </button>
      </header>

      <section className="hero-copy" aria-labelledby="hero-title">
        <h1 id="hero-title">
          <span className="visually-hidden">因为我脑海 已有最难忘</span>
          <Image
            className="hero-title-art"
            src="/images/hero-calligraphy-v3.png"
            alt=""
            width={1672}
            height={941}
            priority
          />
        </h1>
      </section>

      <aside
        className={`planet-card${activeSubsite ? ' is-visible' : ''}`}
        aria-live="polite"
        onPointerEnter={cancelClear}
        onPointerLeave={() => handleHover(null)}
      >
        {activeSubsite ? (
          <>
            <div className="planet-card-topline">
              <span>
                SIZE {String(activeSubsite.sizeLevel).padStart(2, '0')} / 09
              </span>
              <span>{activeSubsite.englishName}</span>
            </div>
            <h2>{activeSubsite.name}</h2>
            <p>{activeSubsite.description}</p>
            <button type="button" onClick={() => beginJourney(activeSubsite)}>
              {coarsePointer ? activeSubsite.prompt : '点击行星，开始穿越'}
              <span aria-hidden="true">↗</span>
            </button>
          </>
        ) : (
          <span className="planet-card-placeholder">SELECT A WORLD</span>
        )}
      </aside>

      <nav className="orbit-nav" aria-label="子站导航">
        <span className="orbit-nav-label">ORBIT MAP</span>
        <ol>
          {SUBSITES.map((subsite) => (
            <li key={subsite.slug}>
              <button
                type="button"
                className={activeSlug === subsite.slug ? 'is-active' : ''}
                onPointerEnter={() => handleHover(subsite)}
                onPointerLeave={() => handleHover(null)}
                onFocus={() => handleHover(subsite)}
                onBlur={() => handleHover(null)}
                onClick={() => beginJourney(subsite)}
              >
                <span>L{subsite.sizeLevel}</span>
                {subsite.name}
              </button>
            </li>
          ))}
        </ol>
      </nav>

      <div className="interaction-hint" aria-hidden="true">
        <span />
        HOVER TO HOLD · CLICK TO TRAVEL
      </div>

      <div className="travel-curtain" aria-hidden="true">
        <span>{travellingTo ? `正在前往 · ${travellingTo.name}` : ''}</span>
      </div>
    </main>
  );
}
