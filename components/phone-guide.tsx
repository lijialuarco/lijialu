import Link from 'next/link';

const fatherChoices = [
  ['荣耀 Magic8 Pro', '12+256GB', '5,500–6,000 元', '护眼与综合体验首选'],
  ['vivo X300s', '12+256GB', '5,299 元', '屏幕最大，性价比更好'],
  ['华为 Mate 80 Pro', '12+256GB', '6,999 元起', '适合已在用鸿蒙生态的家庭'],
];

const motherChoices = [
  ['vivo X500 Pro', '12+256GB', '6,499 元左右', '均衡、质感、人像、轻便'],
  ['OPPO Find X9s Pro', '—', '以活动页为准', '小巧、拍人和旅行'],
  ['OPPO Find X9 Ultra', '—', '约 7,500 元起', '最强远摄、专业拍摄'],
  ['华为 Pura 80 Pro', '12+256GB', '6,499 元', '喜欢华为色彩与鸿蒙生态'],
];

export function PhoneGuide() {
  return (
    <main className="guide-shell">
      <div className="guide-aurora" aria-hidden="true" />
      <header className="guide-header">
        <Link href="/" aria-label="返回宇宙">⌁</Link>
        <span>METEOR M01 · FAMILY PHONE GUIDE</span>
      </header>

      <article className="guide-article">
        <p className="guide-eyebrow">一封给家人的选机备忘</p>
        <h1>择星</h1>
        <p className="guide-lede">
          预算提高后，不必一味堆最高参数：岳父优先大屏、护眼与省心；岳母优先影像、轻便与随手记录。
        </p>

        <section className="guide-verdict">
          <p>最终推荐</p>
          <div>
            <strong>岳父 · 荣耀 Magic8 Pro 12+256GB</strong>
            <span>双十一目标 5,500–6,000 元</span>
          </div>
          <div>
            <strong>岳母 · vivo X500 Pro 12+256GB</strong>
            <span>约 6,499 元；拍远景更多则考虑 Find X9 Ultra</span>
          </div>
        </section>

        <section>
          <div className="guide-section-heading">
            <span>01</span>
            <h2>岳父：阅读、护眼与日常省心</h2>
          </div>
          <p>
            优先选 Magic8 Pro，不是因为参数最高，而是它的护眼方案、电子书模式与长辈日常功能更完整。6.71 英寸已经足够大，暗光阅读可用 4320Hz 高频 PWM；双 3D 人脸识别和反诈功能也更适合长期使用。
          </p>
          <div className="guide-table-wrap">
            <table>
              <thead><tr><th>候选</th><th>版本</th><th>预算</th><th>适合</th></tr></thead>
              <tbody>{fatherChoices.map(([name, version, price, note]) => <tr key={name}><td>{name}</td><td>{version}</td><td>{price}</td><td>{note}</td></tr>)}</tbody>
            </table>
          </div>
          <p className="guide-note">注意：Magic8 Pro 与 X300s 均约 217–219g。若经常躺着单手看小说，更轻的标准版反而更合适。</p>
        </section>

        <section>
          <div className="guide-section-heading">
            <span>02</span>
            <h2>岳母：影像优先，也要好拿</h2>
          </div>
          <p>
            X500 Pro 是更适合送人的均衡答案：机身约 192–197g，适合人像、日常记录与旅行。若更重视照片质感和长焦，可优先去门店上手 Find X9s Pro；想要接近相机的远摄能力，才选择更大更重的 Find X9 Ultra。
          </p>
          <div className="guide-table-wrap">
            <table>
              <thead><tr><th>候选</th><th>版本</th><th>预算</th><th>适合</th></tr></thead>
              <tbody>{motherChoices.map(([name, version, price, note]) => <tr key={name}><td>{name}</td><td>{version}</td><td>{price}</td><td>{note}</td></tr>)}</tbody>
            </table>
          </div>
          <ol className="guide-ranking">
            <li><strong>vivo X500 Pro：</strong>最均衡；轻巧、质感好，适合人像与日常记录。</li>
            <li><strong>OPPO Find X9s Pro：</strong>偏爱照片质感与长焦，同时希望小巧时的优先选择。</li>
            <li><strong>OPPO Find X9 Ultra：</strong>远景、演出和风光的影像上限，但不建议盲买大机身。</li>
            <li><strong>华为 Pura 80 Pro：</strong>偏好 XMAGE 色彩和鸿蒙生态时，仍是可靠选择。</li>
          </ol>
        </section>

        <section className="guide-combos">
          <div className="guide-section-heading"><span>03</span><h2>最后的两种组合</h2></div>
          <p><strong>优先体验：</strong>岳父 Magic8 Pro + 岳母 X500 Pro，约 12,000 元级。</p>
          <p><strong>影像优先：</strong>岳父 Magic8 Pro + 岳母 Find X9 Ultra，约 13,000 元级起。</p>
          <p><strong>同品牌省心：</strong>岳父 X300s + 岳母 X500 Pro。</p>
        </section>

        <footer className="guide-sources">
          规格参考：
          <a href="https://www.honor.com/cn/phones/honor-magic8-pro/spec/" target="_blank" rel="noreferrer">Magic8 Pro</a>
          <a href="https://m.vivo.com.cn/vivo/param/x300s" target="_blank" rel="noreferrer">X300s</a>
          <a href="https://consumer.huawei.com/cn/phones/mate80-pro/" target="_blank" rel="noreferrer">Mate 80 Pro</a>
          <a href="https://www.vivo.com.cn/vivo/param/x500pro" target="_blank" rel="noreferrer">X500 Pro</a>
          <a href="https://www.oppo.com/cn/smartphones/series-find-x/find-x9s-pro/specs/" target="_blank" rel="noreferrer">Find X9s Pro</a>
          <a href="https://consumer.huawei.com/cn/phones/pura80-pro/" target="_blank" rel="noreferrer">Pura 80 Pro</a>
        </footer>
      </article>
    </main>
  );
}
