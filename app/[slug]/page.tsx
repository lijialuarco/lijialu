import Link from 'next/link';
import { getSubsite, SUBSITES } from '@/lib/subsites';

export function generateStaticParams() {
  return SUBSITES.map((subsite) => ({ slug: subsite.slug }));
}

export default async function SubsitePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const subsite = getSubsite(slug);

  if (!subsite) {
    return (
      <main className="subsite-shell">
        <p className="subsite-index">UNKNOWN ORBIT</p>
        <h1>这里还没有星球。</h1>
        <Link href="/">返回宇宙</Link>
      </main>
    );
  }

  return (
    <main
      className="subsite-shell"
      style={
        {
          '--subsite-color': subsite.color,
          '--subsite-accent': subsite.accent,
        } as React.CSSProperties
      }
    >
      <div className="subsite-orb" aria-hidden="true" />
      <p className="subsite-index">
        ORBIT {subsite.index} · {subsite.englishName}
      </p>
      <h1>{subsite.name}</h1>
      <p className="subsite-description">{subsite.description}</p>
      <p className="subsite-status">子站内容将在下一阶段接入。</p>
      <Link href="/">← 返回宇宙</Link>
    </main>
  );
}
