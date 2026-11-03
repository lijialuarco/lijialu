export type Meteor = {
  slug: string;
  index: string;
  name: string;
  englishName: string;
  description: string;
  prompt: string;
  color: string;
  accent: string;
};

export const METEORS: Meteor[] = [
  {
    slug: 'phone-guide',
    index: 'M01',
    name: '择星',
    englishName: 'FAMILY PHONE GUIDE',
    description: '为岳父挑大屏护眼，为岳母挑影像与轻盈握持的一次认真比较。',
    prompt: '查看选机建议',
    color: '#d89b55',
    accent: '#ffe1a5',
  },
];

export function getMeteor(slug: string) {
  return METEORS.find((meteor) => meteor.slug === slug);
}
