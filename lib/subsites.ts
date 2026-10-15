export type PlanetStyle = 'rose-ceramic' | 'ocean-glass' | 'silver-chalk';

export type Subsite = {
  slug: string;
  index: string;
  name: string;
  englishName: string;
  description: string;
  prompt: string;
  sizeLevel: number;
  planetStyle: PlanetStyle;
  color: string;
  secondaryColor: string;
  accent: string;
};

export const SUBSITES: Subsite[] = [
  {
    slug: 'cpa',
    index: '01',
    name: '衡序',
    englishName: 'CPA STUDY',
    description: '为她整理课程、题库、错题与备考进度的学习空间。',
    prompt: '进入 CPA 学习站',
    sizeLevel: 8,
    planetStyle: 'rose-ceramic',
    color: '#d7a6b1',
    secondaryColor: '#f3eee9',
    accent: '#f3ddd9',
  },
  {
    slug: 'tubao',
    index: '02',
    name: '涂光',
    englishName: 'TUBAO ARCHIVE',
    description: '收藏涂宝的照片、视频，以及每一段正在长大的日常。',
    prompt: '进入涂宝影像站',
    sizeLevel: 7,
    planetStyle: 'ocean-glass',
    color: '#1d4f7a',
    secondaryColor: '#3b8fa5',
    accent: '#8fd6d4',
  },
  {
    slug: 'english',
    index: '03',
    name: '词域',
    englishName: 'ENGLISH LAB',
    description: '词汇、听力与表达，记录每天一点点的进步。',
    prompt: '进入英语学习站',
    sizeLevel: 3,
    planetStyle: 'silver-chalk',
    color: '#f0f0eb',
    secondaryColor: '#c8cccf',
    accent: '#929aa1',
  },
];

export function getSubsite(slug: string) {
  return SUBSITES.find((subsite) => subsite.slug === slug);
}
