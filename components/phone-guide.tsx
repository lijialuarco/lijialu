type Phone = { name: string; role: string; price: string; image?: string; source: string; specs: [string, string][]; verdict: string; caution: string };

const fatherPhones: Phone[] = [
  { name: '荣耀 Magic8', role: '预算首选：护眼阅读 + 长续航', price: '12+256GB 官方起售价 4,499 元', source: 'https://www.honor.com/cn/news/honor-magic8-launch/', specs: [['屏幕', '6.58″ 直屏'], ['护眼', '绿洲护眼屏 · 1nit 最低亮度'], ['续航', '7,000mAh · 90W 有线快充'], ['影像', '满足日常记录的三摄'], ['重量', '约 205g']], verdict: '总预算有限时，比 Pro 少的是顶级长焦和部分解锁配置，但阅读尺寸、续航和护眼体验依然对题。', caution: '没有 Pro 的 2 亿潜望长焦；若长辈常拍远处景物，再考虑上 Pro。' },
  { name: 'vivo X300s', role: '大屏备选：屏幕与续航', price: '12+256GB 官方起售价 4,999 元', source: 'https://m.vivo.com.cn/vivo/param/x300s', specs: [['屏幕', '6.78″ AMOLED · 1–144Hz'], ['护眼', '全亮度 DC + 2160Hz PWM'], ['续航', '7,100mAh · 90W 有线 / 40W 无线'], ['影像', '2亿主摄 + 5,000万 3× APO 长焦'], ['重量', '约 217g']], verdict: '想要更大阅读面积、又重视电池容量时，它的性价比很强。', caution: '机身更宽；和 Magic8 Pro 一样属于双手大屏机。' },
  { name: '华为 Mate 80 Pro', role: '生态备选：鸿蒙协同', price: '12+256GB 官方起售价 6,999 元', source: 'https://consumer.huawei.com/cn/phones/mate80-pro/', specs: [['屏幕', '6.75″ LTPO'], ['系统', '鸿蒙生态协同'], ['续航', '5,750mAh · 100W 有线 / 80W 无线'], ['影像', '第二代红枫影像'], ['适合', '已有华为设备的家庭']], verdict: '家里已有华为平板、手表、电脑，或老人已习惯鸿蒙，学习成本最低。', caution: '若不需要生态协同，同预算里屏幕护眼和电池不占优。' },
];

const motherPhones: Phone[] = [
  { name: 'vivo X500 Pro', role: '首选：轻巧人像 + 旅行记录', price: '12+256GB 官方起售价 6,499 元', source: 'https://www.vivo.com.cn/vivo/param/x500pro', specs: [['屏幕', '6.36″ AMOLED · 1–144Hz'], ['重量', '约 192–197g'], ['续航', '6,510mAh · 90W 有线 / 40W 无线'], ['影像', '5,000万主摄 + 6,400万蔡司 APO 长焦'], ['适合', '人像、随手记录、旅行']], verdict: '最不容易后悔的送人选择。尺寸和重量友好，拍人、拍家人、日常旅游都很平衡。', caution: '小屏机取向，常拍演出或远山时，长焦上限不如 Ultra。' },
  { name: 'OPPO Find X9s Pro', role: '小尺寸影像：双 2 亿', price: '价格以官方活动页为准', image: '/images/phones/oppo-find-x9s-pro.png', source: 'https://www.oppo.com/cn/smartphones/series-find-x/find-x9s-pro/specs/', specs: [['屏幕', '6.32″ · 2640×1216'], ['重量', '约 198–200g'], ['续航', '7,025mAh · 80W 有线 / 50W 无线'], ['影像', '2亿主摄 + 2亿 2.8× 长焦'], ['适合', '喜欢照片质感、常拍旅行']], verdict: '希望相机规格强，又不想带一台笨重大杯时，先去门店重点体验这一台。', caution: '是否喜欢它的成像风格，建议拿自己的人像现场试拍。' },
  { name: 'OPPO Find X9 Ultra', role: '影像上限：远摄、演出、风光', price: '高端档，购前以官方商城活动为准', image: '/images/phones/oppo-find-x9-ultra.webp', source: 'https://www.oppo.com/cn/smartphones/series-find-x/find-x9-ultra/specs/', specs: [['屏幕', '6.82″ QHD+ · 3168×1440'], ['重量', '约 235–236g'], ['续航', '7,050mAh · 100W 有线 / 50W 无线'], ['影像', '2亿主摄 + 2亿 70mm + 5,000万 230mm'], ['适合', '远景、演出、风光、摄影爱好']], verdict: '这是“手机替代部分相机”的选择。常拍舞台、远处孩子、旅行风景，它的长焦组合最有意义。', caution: '235g+ 的大机身很明显；手小、只拍生活照，不建议为参数盲买。' },
  { name: '华为 Pura 80 Pro', role: '色彩与生态：XMAGE', price: '12+256GB 官方起售价 6,499 元', source: 'https://consumer.huawei.com/cn/phones/pura80-pro/specs/', specs: [['屏幕', '6.8″ OLED · 1–120Hz'], ['重量', '约 219g'], ['续航', '5,700mAh · 100W 有线 / 80W 无线'], ['影像', '1英寸主摄 + 4× 微距长焦'], ['适合', '喜欢 XMAGE 色彩、鸿蒙生态']], verdict: '对华为的直出色彩和鸿蒙体验有偏好时，它依然是可靠的影像旗舰。', caution: '相比更轻的小尺寸旗舰，拿久了的负担更大。' },
];

const seriesMap = [
  { name: '荣耀 Magic', tag: '全能 / 长续航 / 护眼', models: 'Magic8 · Magic8 Pro', forWho: '想要大电池、护眼屏、系统功能完整，又不把拍照当唯一刚需的人。', focus: '标准版是预算与续航平衡；Pro 把 2 亿潜望、3D 安全解锁和更完整的影像补齐。', skip: '对人像审美或远摄创作有明确执念，不要只因“全能”而买。', source: 'https://www.honor.com/cn/news/honor-magic8-launch/' },
  { name: 'vivo X500', tag: '人像 / 视频 / 创作', models: 'X500 · X500 Pro · X500 Pro Max', forWho: '经常拍家人、孩子、旅行视频，希望直接出片而不是后期调色的人。', focus: 'X500 是大屏长续航的影像入门；Pro 用 6.36 英寸和约 192–197g 解决便携；Pro Max 是视频、长焦与创作外设的上限。', skip: '只刷视频、不常拍照，X 系列的影像溢价未必值得。', source: 'https://www.vivo.com.cn/brand/news/detail?id=1393&type=0' },
  { name: 'OPPO Find X9', tag: '色彩直出 / 双 2 亿 / 哈苏', models: 'Find X9s Pro · Find X9 Ultra', forWho: '喜欢相机直出色彩、旅行风景与人像，并愿意为影像设计付出预算的人。', focus: 'X9s Pro 追求小尺寸里的双 2 亿影像和长续航；Ultra 走“口袋哈苏”路线，用大机身换更远的光学焦段。', skip: '手小或只拍日常记录，先试 X9s Pro；Ultra 不宜只看参数下单。', source: 'https://www.oppo.com/cn/smartphones/series-find-x/find-x9s-pro/' },
  { name: '华为 Pura', tag: 'XMAGE / 鸿蒙 / 风格化直出', models: 'Pura 80 · Pura 80 Pro', forWho: '已在鸿蒙生态、喜欢 XMAGE 色彩，或看重通信与系统协同的人。', focus: '标准版主打直屏、红枫原色、全焦段和相对低门槛；Pro 再加大底主摄与更强的长焦。', skip: '若核心需求是轻巧，先留意重量；若不需要鸿蒙协同，也要同价位横向看影像与续航。', source: 'https://consumer.huawei.com/cn/phones/pura80/' },
];

function ProductCard({ phone }: { phone: Phone }) {
  return <article className="phone-card">
    {phone.image ? <a className="phone-photo" href={phone.source} target="_blank" rel="noreferrer" aria-label={`查看 ${phone.name} 官方产品图`}><img src={phone.image} alt={`${phone.name} 官方产品图`} /><span>官方产品图 · 查看来源 ↗</span></a> : <a className="phone-photo phone-photo-link" href={phone.source} target="_blank" rel="noreferrer"><span>查看官方产品图 ↗</span></a>}
    <div className="phone-card-copy"><p>{phone.role}</p><h3>{phone.name}</h3><small>{phone.price}</small><dl>{phone.specs.map(([label, value]) => <div key={label}><dt>{label}</dt><dd>{value}</dd></div>)}</dl><p className="phone-verdict">{phone.verdict}</p><p className="phone-caution">注意：{phone.caution}</p></div>
  </article>;
}

function ComparisonTable({ phones }: { phones: Phone[] }) {
  const rows = ['屏幕', '重量', '护眼', '续航', '影像', '适合'];
  return <div className="guide-table-wrap guide-compare"><table><thead><tr><th>项目</th>{phones.map(phone => <th key={phone.name}>{phone.name}</th>)}</tr></thead><tbody>{rows.map(row => <tr key={row}><td>{row}</td>{phones.map(phone => <td key={phone.name}>{phone.specs.find(([label]) => label === row)?.[1] ?? '—'}</td>)}</tr>)}</tbody></table></div>;
}

function SeriesMap() {
  return <div className="series-map">{seriesMap.map(series => <article key={series.name} className="series-card"><p>{series.tag}</p><h3>{series.name}</h3><small>{series.models}</small><dl><div><dt>适合谁</dt><dd>{series.forWho}</dd></div><div><dt>系列重点</dt><dd>{series.focus}</dd></div><div><dt>先别买，如果…</dt><dd>{series.skip}</dd></div></dl><a href={series.source} target="_blank" rel="noreferrer">官方系列介绍 ↗</a></article>)}</div>;
}

export function PhoneGuide() {
  return <main className="guide-shell"><div className="guide-aurora" aria-hidden="true" /><header className="guide-header"><a href="/" target="_top" aria-label="返回宇宙">⌁</a><span>METEOR M01 · FAMILY PHONE GUIDE</span></header><article className="guide-article">
    <p className="guide-eyebrow">一封给家人的选机备忘 · 2026</p><h1>择星</h1><p className="guide-lede">不是堆一台“最高参数”，而是给不同使用习惯选一台愿意每天拿在手里的手机。价格会随官方活动变动，以下按官方规格与建议零售价整理。</p>
    <section className="guide-verdict"><p>11,000 元内的结论</p><div><strong>岳父：荣耀 Magic8 12+256GB · 4,499 元</strong><span>将 Pro 的大幅溢价留给真正需要长焦的人；标准版的 6.58 英寸直屏、7,000mAh 续航更符合长时间阅读。</span></div><div><strong>岳母：vivo X500 Pro 12+256GB · 6,499 元</strong><span>人像、轻便与续航三项最均衡。两台官方起售价合计 <b>10,998 元</b>。</span></div></section>
    <section><div className="guide-section-heading"><span>01</span><h2>先选系列，再比单机</h2></div><p>同一个品牌的不同系列，解决的是不同问题。先看下面四张“系列地图”，排除不适合的方向，再进入参数表会更快。</p><SeriesMap /></section>
    <section><div className="guide-section-heading"><span>02</span><h2>理智线：先看可量化的取舍</h2></div><div className="guide-decisions"><div><b>总预算 ≤ 11,000 元</b><span>Magic8 4,499 + X500 Pro 6,499 = 10,998 元。</span></div><div><b>岳父每天阅读</b><span>优先看尺寸、重量、调光与电池，而不是长焦像素。</span></div><div><b>岳母拍人、拍家人、随身带</b><span>优先看重量、主摄/长焦组合和人像直出；192–197g 的 X500 Pro 明显轻于大杯。</span></div><div><b>不为用不到的能力付费</b><span>Ultra 级远摄与 Pro 级 2 亿长焦很强，但会直接挤压双机预算。</span></div></div></section>
    <section><div className="guide-section-heading"><span>03</span><h2>岳父：阅读、护眼与日常省心</h2></div><p>预算收紧后，Magic8 标准版更合理：它保留同代性能、护眼屏与 7,000mAh 级电池，机身约 205g；相较 Magic8 Pro，放弃的是重度远摄和更高阶解锁，而不是阅读核心体验。X300s 是更重视更大屏幕时的备选。</p><ComparisonTable phones={fatherPhones} /><div className="phone-grid">{fatherPhones.map(phone => <ProductCard key={phone.name} phone={phone} />)}</div></section>
    <section><div className="guide-section-heading"><span>04</span><h2>岳母：影像优先，也要好拿</h2></div><p>影像旗舰最容易被忽略的是重量。X500 Pro 与 X9s Pro 都是“愿意带出门”的影像机；X9 Ultra 的价值在于远摄，而不是日常随拍。购买前，最好以实际握持和人像直出作为最后一票。</p><ComparisonTable phones={motherPhones} /><div className="phone-grid">{motherPhones.map(phone => <ProductCard key={phone.name} phone={phone} />)}</div></section>
    <section className="guide-community"><div className="guide-section-heading"><span>05</span><h2>口碑线：KOL 与真实内容该怎么看</h2></div><p>主观体验不该替代参数表，所以这里只记录可复核的“反复被提到的点”，并保留原始入口。B 站评测普遍肯定 Magic8 系列的续航、护眼和均衡度；对于 X500 Pro，内容讨论主要集中在人像直出、6.36 英寸尺寸和握持。小红书更适合最终核对“人物肤色是否合审美”和“拿在手里是否嫌重”，不要把单张精修样张当作结论。</p><div className="guide-decisions"><div><b>Magic8 · B站共识</b><span>长续航、护眼屏和标准版性价比是高频词；长焦不是它的购买理由。<a href="https://www.bilibili.com/video/BV1UR4izvEL4/" target="_blank" rel="noreferrer">看评测 ↗</a></span></div><div><b>X500 Pro · 社媒核对点</b><span>重点看不同光线下的人像肤色、抓拍，以及 6.36 英寸是否适合她的手。<a href="https://www.xiaohongshu.com/search_result?keyword=vivo%20X500%20Pro%20%E4%BA%BA%E5%83%8F" target="_blank" rel="noreferrer">小红书搜索 ↗</a></span></div><div><b>Magic8 Pro · B站对照</b><span>评测认可其续航与影像，但对本次双机预算而言，1,200 元差价应留给岳母的主力影像机。<a href="https://www.bilibili.com/video/BV1YCsgzcE7R/" target="_blank" rel="noreferrer">看评测 ↗</a></span></div><div><b>线下最后 5 分钟</b><span>两人各自试：单手打字、阅读 10 分钟、拍一张室内人像、调出相册看大图。手感和色彩喜好优先于 KOL 结论。</span></div></div></section>
    <section className="guide-combos"><div className="guide-section-heading"><span>06</span><h2>可以直接下单的组合</h2></div><p><strong>预算内推荐：</strong>岳父 Magic8 12+256 + 岳母 X500 Pro 12+256，官方起售价 <strong>10,998 元</strong>。</p><p><strong>等待活动的上探：</strong>如果 Magic8 Pro 12+256 降至 4,500 元左右，才考虑用它替换 Magic8；否则会突破预算。</p><p><strong>不建议本轮购买：</strong>Find X9 Ultra。它的远摄很强，但重量与价格都会让“给家人用”这件事变得不那么轻松。</p></section>
    <footer className="guide-sources">规格与产品图均链接至品牌官方页面；价格、促销与颜色请在购买当日再次确认。<div>{[...fatherPhones, ...motherPhones].map(phone => <a key={phone.name} href={phone.source} target="_blank" rel="noreferrer">{phone.name} ↗</a>)}</div></footer>
  </article></main>;
}
