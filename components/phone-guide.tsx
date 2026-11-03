type Phone = { name: string; role: string; price: string; image?: string; source: string; specs: [string, string][]; verdict: string; caution: string };

const fatherPhones: Phone[] = [
  { name: '荣耀 Magic8 Pro', role: '首选：护眼阅读 + 全能', price: '12+256GB 官方起售价 5,699 元', image: '/images/phones/honor-magic8-pro.webp', source: 'https://www.honor.com/cn/phones/honor-magic8-pro/spec/', specs: [['屏幕', '6.71″ OLED · 1–120Hz'], ['护眼', '4320Hz PWM / 圆偏振光 / 电子书模式'], ['续航', '7,200mAh · 120W 有线 / 80W 无线'], ['影像', '5,000万主摄 + 2亿像素 3.7× 潜望长焦'], ['重量', '约 219g']], verdict: '如果每天看新闻、微信、小说的时间很长，优先它。护眼方案、扬声器、续航与长焦都没有短板。', caution: '219g 并不轻；常躺着单手阅读，先去门店实握。' },
  { name: 'vivo X300s', role: '大屏备选：屏幕与续航', price: '12+256GB 官方起售价 4,999 元', source: 'https://m.vivo.com.cn/vivo/param/x300s', specs: [['屏幕', '6.78″ AMOLED · 1–144Hz'], ['护眼', '全亮度 DC + 2160Hz PWM'], ['续航', '7,100mAh · 90W 有线 / 40W 无线'], ['影像', '2亿主摄 + 5,000万 3× APO 长焦'], ['重量', '约 217g']], verdict: '想要更大阅读面积、又重视电池容量时，它的性价比很强。', caution: '机身更宽；和 Magic8 Pro 一样属于双手大屏机。' },
  { name: '华为 Mate 80 Pro', role: '生态备选：鸿蒙协同', price: '12+256GB 官方起售价 6,999 元', source: 'https://consumer.huawei.com/cn/phones/mate80-pro/', specs: [['屏幕', '6.75″ LTPO'], ['系统', '鸿蒙生态协同'], ['续航', '5,750mAh · 100W 有线 / 80W 无线'], ['影像', '第二代红枫影像'], ['适合', '已有华为设备的家庭']], verdict: '家里已有华为平板、手表、电脑，或老人已习惯鸿蒙，学习成本最低。', caution: '若不需要生态协同，同预算里屏幕护眼和电池不占优。' },
];

const motherPhones: Phone[] = [
  { name: 'vivo X500 Pro', role: '首选：轻巧人像 + 旅行记录', price: '12+256GB 官方起售价 6,499 元', source: 'https://www.vivo.com.cn/vivo/param/x500pro', specs: [['屏幕', '6.36″ AMOLED · 1–144Hz'], ['重量', '约 192–197g'], ['续航', '6,510mAh · 90W 有线 / 40W 无线'], ['影像', '5,000万主摄 + 6,400万蔡司 APO 长焦'], ['适合', '人像、随手记录、旅行']], verdict: '最不容易后悔的送人选择。尺寸和重量友好，拍人、拍家人、日常旅游都很平衡。', caution: '小屏机取向，常拍演出或远山时，长焦上限不如 Ultra。' },
  { name: 'OPPO Find X9s Pro', role: '小尺寸影像：双 2 亿', price: '价格以官方活动页为准', image: '/images/phones/oppo-find-x9s-pro.png', source: 'https://www.oppo.com/cn/smartphones/series-find-x/find-x9s-pro/specs/', specs: [['屏幕', '6.32″ · 2640×1216'], ['重量', '约 198–200g'], ['续航', '7,025mAh · 80W 有线 / 50W 无线'], ['影像', '2亿主摄 + 2亿 2.8× 长焦'], ['适合', '喜欢照片质感、常拍旅行']], verdict: '希望相机规格强，又不想带一台笨重大杯时，先去门店重点体验这一台。', caution: '是否喜欢它的成像风格，建议拿自己的人像现场试拍。' },
  { name: 'OPPO Find X9 Ultra', role: '影像上限：远摄、演出、风光', price: '高端档，购前以官方商城活动为准', image: '/images/phones/oppo-find-x9-ultra.webp', source: 'https://www.oppo.com/cn/smartphones/series-find-x/find-x9-ultra/specs/', specs: [['屏幕', '6.82″ QHD+ · 3168×1440'], ['重量', '约 235–236g'], ['续航', '7,050mAh · 100W 有线 / 50W 无线'], ['影像', '2亿主摄 + 2亿 70mm + 5,000万 230mm'], ['适合', '远景、演出、风光、摄影爱好']], verdict: '这是“手机替代部分相机”的选择。常拍舞台、远处孩子、旅行风景，它的长焦组合最有意义。', caution: '235g+ 的大机身很明显；手小、只拍生活照，不建议为参数盲买。' },
  { name: '华为 Pura 80 Pro', role: '色彩与生态：XMAGE', price: '12+256GB 官方起售价 6,499 元', source: 'https://consumer.huawei.com/cn/phones/pura80-pro/specs/', specs: [['屏幕', '6.8″ OLED · 1–120Hz'], ['重量', '约 219g'], ['续航', '5,700mAh · 100W 有线 / 80W 无线'], ['影像', '1英寸主摄 + 4× 微距长焦'], ['适合', '喜欢 XMAGE 色彩、鸿蒙生态']], verdict: '对华为的直出色彩和鸿蒙体验有偏好时，它依然是可靠的影像旗舰。', caution: '相比更轻的小尺寸旗舰，拿久了的负担更大。' },
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

export function PhoneGuide() {
  return <main className="guide-shell"><div className="guide-aurora" aria-hidden="true" /><header className="guide-header"><a href="/" target="_top" aria-label="返回宇宙">⌁</a><span>METEOR M01 · FAMILY PHONE GUIDE</span></header><article className="guide-article">
    <p className="guide-eyebrow">一封给家人的选机备忘 · 2026</p><h1>择星</h1><p className="guide-lede">不是堆一台“最高参数”，而是给不同使用习惯选一台愿意每天拿在手里的手机。价格会随官方活动变动，以下按官方规格与建议零售价整理。</p>
    <section className="guide-verdict"><p>先给结论</p><div><strong>岳父：荣耀 Magic8 Pro 12+256GB</strong><span>阅读、护眼、续航和省心功能的均衡首选；目标价可看 5,500–6,000 元区间。</span></div><div><strong>岳母：vivo X500 Pro 12+256GB</strong><span>优先轻巧、人像、旅行记录；若“远摄”是第一需求，再升级 Find X9 Ultra。</span></div></section>
    <section><div className="guide-section-heading"><span>01</span><h2>先按使用场景决定</h2></div><div className="guide-decisions"><div><b>每天长时间阅读</b><span>Magic8 Pro：护眼与大屏体验优先。</span></div><div><b>华为设备很多</b><span>Mate 80 Pro / Pura 80 Pro：减少迁移成本。</span></div><div><b>拍人、拍家人、随身带</b><span>X500 Pro：更轻、更不挑场景。</span></div><div><b>常拍演出、远景、旅行风光</b><span>Find X9 Ultra：用重量换长焦上限。</span></div></div></section>
    <section><div className="guide-section-heading"><span>02</span><h2>岳父：阅读、护眼与日常省心</h2></div><p>Magic8 Pro 的优势不是某一项极限参数，而是暗光阅读、大屏、续航与长辈易用功能组合得最完整。X300s 是更看重屏幕面积与价格时的选择；只有已经深度使用鸿蒙生态时，Mate 80 Pro 才应排在前面。</p><ComparisonTable phones={fatherPhones} /><div className="phone-grid">{fatherPhones.map(phone => <ProductCard key={phone.name} phone={phone} />)}</div></section>
    <section><div className="guide-section-heading"><span>03</span><h2>岳母：影像优先，也要好拿</h2></div><p>影像旗舰最容易被忽略的是重量。X500 Pro 与 X9s Pro 都是“愿意带出门”的影像机；X9 Ultra 的价值在于远摄，而不是日常随拍。购买前，最好以实际握持和人像直出作为最后一票。</p><ComparisonTable phones={motherPhones} /><div className="phone-grid">{motherPhones.map(phone => <ProductCard key={phone.name} phone={phone} />)}</div></section>
    <section className="guide-combos"><div className="guide-section-heading"><span>04</span><h2>可以直接下单的组合</h2></div><p><strong>体验优先：</strong>岳父 Magic8 Pro + 岳母 X500 Pro。一个护眼省心，一个轻巧好拍，约 12,000 元级。</p><p><strong>摄影优先：</strong>岳父 Magic8 Pro + 岳母 Find X9 Ultra。接受更大更重的机身，换取远摄能力。</p><p><strong>同品牌省心：</strong>岳父 X300s + 岳母 X500 Pro。方便同步相册、迁移数据和后续售后沟通。</p></section>
    <footer className="guide-sources">规格与产品图均链接至品牌官方页面；价格、促销与颜色请在购买当日再次确认。<div>{[...fatherPhones, ...motherPhones].map(phone => <a key={phone.name} href={phone.source} target="_blank" rel="noreferrer">{phone.name} ↗</a>)}</div></footer>
  </article></main>;
}
