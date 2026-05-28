export type InsightCardData = {
  category: string;
  title: string;
  author: string;
  date: string;
  readMoreHref: string;
};

export type InsightCardProps = {
  article: InsightCardData;
  index?: number;
};
