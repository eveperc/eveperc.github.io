export interface PostFrontmatter {
  layout: string;
  title: string;
  pubDate: string;
  description: string;
  author: string;
  image?: {
    url: string;
    alt: string;
  };
  tags?: string[];
}

export interface Post {
  frontmatter: PostFrontmatter;
  file: string;
  url: string;
  rowContent: string;
}
