export type SocialLink = {
  label: string;
  url: string;
  name: string;
};

export type Article = {
  id: number;
  title: string;
  url: string;
  publishedAt: Date;
  kind: 'zenn' | 'hatena';
};
