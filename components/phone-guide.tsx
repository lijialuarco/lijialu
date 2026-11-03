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

const finalPick = [
  { name: '荣耀 Magic8 Pro', version: '12GB+256GB · 5,699 元', price: 5699, reason: '把大屏、护眼、续航、长焦和耐用性一次补齐。它不是“某一项最极致”，但在 5,699 元档给到 6.71 英寸 LTPO 屏、7200mAh、120W/80W 充电、2 亿 3.7× 潜望长焦和 IP68/IP69/IP69K。作为两台中的大屏全能机，几乎没有功能短板。', strengths: ['4320Hz PWM + 圆偏振光：长时间用屏的硬指标更完整', '7200mAh + 120W/80W：续航与补能都在旗舰第一梯队', '2 亿 3.7× 潜望：远景、人像、旅行都不会受焦段限制', '3D 人脸 + 超声波指纹、强防水：日常便利与耐用性加分'], compromise: '约 219g、6.71 英寸，不适合把单手轻巧放在第一位的人。', source: 'https://www.honor.com/cn/phones/honor-magic8-pro/spec/' },
  { name: 'Xiaomi 17 Pro', version: '12GB+256GB · 5,699 元起', price: 5699, reason: '用同一档预算提供与大屏旗舰完全不同的价值：更适合日常随身使用的小尺寸旗舰、徕卡影像风格，以及更具辨识度的背屏交互。它和 Magic8 Pro 不重复：前者是轻巧/影像审美，后者是大屏/续航/长焦。', strengths: ['6.3 英寸小尺寸路线：与大屏旗舰形成真正互补', '第五代骁龙 8 至尊版：性能代际不降档', '徕卡影像与背部副屏：拍照体验和日常交互有独立价值', 'Pro 版相对标准版增加潜望长焦：不是只为外观加价'], compromise: '背屏是体验加分，不是刚需；若只要最纯粹的性价比，Xiaomi 17 标准版更便宜。', source: 'https://www.mi.com/prod/xiaomi-17-pro' },
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

function FinalPick() {
  const total = finalPick.reduce((sum, phone) => sum + phone.price, 0);
  return <section className="final-pick"><div className="guide-section-heading"><span>FINAL</span><h2>只看总价 11,000–12,000 元的最终答案</h2></div><p className="final-pick-intro">评估标准只有四项：旗舰性能不能降档、两台功能必须互补、影像焦段不能重复、价格必须落在预算内。结论不是“最便宜”，而是在这个总价里把可用能力买得最满。</p><div className="final-total"><span>两台合计</span><strong>¥{total.toLocaleString()}</strong><small>均为 12GB+256GB 起售版本；以购买当日官方/授权渠道价格为准</small></div><div className="final-pick-grid">{finalPick.map(phone => <article key={phone.name}><p>{phone.version}</p><h3>{phone.name}</h3><div className="final-reason">{phone.reason}</div><ul>{phone.strengths.map(item => <li key={item}>{item}</li>)}</ul><p className="phone-caution">取舍：{phone.compromise}</p><a href={phone.source} target="_blank" rel="noreferrer">官方规格与价格 ↗</a></article>)}</div><div className="final-elimination"><b>为什么不是其他主流选项？</b><span>iPhone 17 的视频和生态是优势，但在同价位缺少独立长焦、充电与硬件堆料不占优；华为 Pura 80 的价值主要在鸿蒙与 XMAGE，若不设生态偏好，纯硬件完整度不如 Magic8 Pro；vivo / OPPO 的顶级影像机很强，但想维持两台都旗舰且总价不超 12,000 元，组合空间更紧。</span></div></section>;
}

export function PhoneGuide() {
  return <main className="guide-shell"><div className="guide-aurora" aria-hidden="true" /><header className="guide-header"><a href="/" target="_top" aria-label="返回宇宙">⌁</a><span>METEOR M01 · FAMILY PHONE GUIDE</span></header><article className="guide-article">
    <p className="guide-eyebrow">一封给家人的选机备忘 · 2026</p><h1>择星</h1><p className="guide-lede">不是堆一台“最高参数”，而是给不同使用习惯选一台愿意每天拿在手里的手机。价格会随官方活动变动，以下按官方规格与建议零售价整理。</p>
    <section className="guide-verdict"><p>独立推荐声明</p><div><strong>不代入任何既有设备、年龄、品牌或拍照偏好</strong><span>以下结论只以总价 11,000–12,000 元、两台综合性价比最大化为目标。</span></div></section>
    <FinalPick />
    <section><div className="guide-section-heading"><span>01</span><h2>先选系列，再比单机</h2></div><p>同一个品牌的不同系列，解决的是不同问题。先看下面四张“系列地图”，排除不适合的方向，再进入参数表会更快。</p><SeriesMap /></section>
    <section><div className="guide-section-heading"><span>02</span><h2>理智线：先看可量化的取舍</h2></div><div className="guide-decisions"><div><b>预算必须封顶</b><span>两台 12+256GB 合计 11,398 元，留出少量活动波动空间。</span></div><div><b>两台不能同质化</b><span>一台大屏全能，一台小尺寸旗舰，覆盖不同握持与使用场景。</span></div><div><b>性能必须同代</b><span>两台均为第五代骁龙 8 至尊版路线，不用一台旗舰搭一台明显降档的“凑数机”。</span></div><div><b>不为用不到的能力付费</b><span>Ultra 级影像很强，但会挤压总预算，且不如“两台都完整”划算。</span></div></div></section>
    <section><div className="guide-section-heading"><span>03</span><h2>岳父：阅读、护眼与日常省心</h2></div><p>预算收紧后，Magic8 标准版更合理：它保留同代性能、护眼屏与 7,000mAh 级电池，机身约 205g；相较 Magic8 Pro，放弃的是重度远摄和更高阶解锁，而不是阅读核心体验。X300s 是更重视更大屏幕时的备选。</p><ComparisonTable phones={fatherPhones} /><div className="phone-grid">{fatherPhones.map(phone => <ProductCard key={phone.name} phone={phone} />)}</div></section>
    <section><div className="guide-section-heading"><span>04</span><h2>岳母：影像优先，也要好拿</h2></div><p>影像旗舰最容易被忽略的是重量。X500 Pro 与 X9s Pro 都是“愿意带出门”的影像机；X9 Ultra 的价值在于远摄，而不是日常随拍。购买前，最好以实际握持和人像直出作为最后一票。</p><ComparisonTable phones={motherPhones} /><div className="phone-grid">{motherPhones.map(phone => <ProductCard key={phone.name} phone={phone} />)}</div></section>
    <section className="guide-community"><div className="guide-section-heading"><span>05</span><h2>口碑线：KOL 与真实内容该怎么看</h2></div><p>主观体验不该替代参数表，所以这里只记录可复核的“反复被提到的点”，并保留原始入口。B 站评测普遍肯定 Magic8 系列的续航、护眼和均衡度；对于 X500 Pro，内容讨论主要集中在人像直出、6.36 英寸尺寸和握持。小红书更适合最终核对“人物肤色是否合审美”和“拿在手里是否嫌重”，不要把单张精修样张当作结论。</p><div className="guide-decisions"><div><b>Magic8 · B站共识</b><span>长续航、护眼屏和标准版性价比是高频词；长焦不是它的购买理由。<a href="https://www.bilibili.com/video/BV1UR4izvEL4/" target="_blank" rel="noreferrer">看评测 ↗</a></span></div><div><b>X500 Pro · 社媒核对点</b><span>重点看不同光线下的人像肤色、抓拍，以及 6.36 英寸是否适合她的手。<a href="https://www.xiaohongshu.com/search_result?keyword=vivo%20X500%20Pro%20%E4%BA%BA%E5%83%8F" target="_blank" rel="noreferrer">小红书搜索 ↗</a></span></div><div><b>Magic8 Pro · B站对照</b><span>评测认可其续航与影像，但对本次双机预算而言，1,200 元差价应留给岳母的主力影像机。<a href="https://www.bilibili.com/video/BV1YCsgzcE7R/" target="_blank" rel="noreferrer">看评测 ↗</a></span></div><div><b>线下最后 5 分钟</b><span>两人各自试：单手打字、阅读 10 分钟、拍一张室内人像、调出相册看大图。手感和色彩喜好优先于 KOL 结论。</span></div></div></section>
    <section className="guide-combos"><div className="guide-section-heading"><span>06</span><h2>下单前最后确认</h2></div><p><strong>推荐组合：</strong>荣耀 Magic8 Pro 12+256 + Xiaomi 17 Pro 12+256，官方起售价 <strong>11,398 元</strong>。</p><p><strong>可替换逻辑：</strong>想把一台变得更轻、更便宜，换 Xiaomi 17 标准版；想把一台变成极致影像机，则要接受总价上浮。</p><p><strong>不建议：</strong>为了凑预算买 128GB 或让其中一台掉到中端机。两台都选 12+256，才是这笔预算性价比最高的用法。</p></section>
    <footer className="guide-sources">规格与产品图均链接至品牌官方页面；价格、促销与颜色请在购买当日再次确认。<div>{[...fatherPhones, ...motherPhones].map(phone => <a key={phone.name} href={phone.source} target="_blank" rel="noreferrer">{phone.name} ↗</a>)}</div></footer>
  </article></main>;
}
