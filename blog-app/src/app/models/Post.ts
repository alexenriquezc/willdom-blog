export interface TimelineItem {
  title: string;
  content: string;
  description?: string;
  url?: string;
  image?: string;
  publishedAt?: Date;
  source?: {name: string, url:string}
}
