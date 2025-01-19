export interface Post {
  title: string;
  description: string;
  pubDate: Date;
  updatedDate?: Date;
  tags: string[];
  draft: boolean;
  image?: {
    url: string;
    alt: string;
  };
}
