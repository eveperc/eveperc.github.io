import type React from "react";

type BlogProps = {
  children: React.ReactNode;
}
type BlogComposition = {
  Image: React.FC<BlogImageProps>;
  UpdatedAt: React.FC<BlogUpdatedAtProps>;
  Category: React.FC<BlogCategoryProps>;
  Title: React.FC<BlogTitleProps>
  Toc: React.FC<BlogTocProps>
  Body: React.FC<BlogBodyProps>
};
type BlogImageProps = {
  children: React.ReactNode;
};
type BlogUpdatedAtProps = {
  children: React.ReactNode;
};
type BlogCategoryProps = {
  children: React.ReactNode;
};
type BlogTitleProps = {
  children: React.ReactNode;
};
type BlogTocProps = {
  children: React.ReactNode;
};
type BlogBodyProps = {
  children: React.ReactNode;
};

export const Blog: React.FC<BlogProps> & BlogComposition = ({ children }) => {
  return <div className="main content">{children}</div>
}
const BlogImage: React.FC<BlogImageProps> = ({ children }) => {
  return <figure className="bg-white flex justify-center max-h-96">{children}</figure>
}
const BlogUpdatedAt: React.FC<BlogUpdatedAtProps> = ({ children }) => {
  return <div className="col-span-2 text-lg font-bold badge badge-outline">{children}</div>
}
const BlogCategory: React.FC<BlogCategoryProps> = ({ children }) => {
  return <div className="col-span-2 text-lg font-bold badge badge-secondary">{children}</div>
}
const BlogTitle: React.FC<BlogTitleProps> = ({ children }) => {
  return <h2 className="col-span-4 row-span-4 text-5xl font-bold">{children}</h2>
}
const BlogToc: React.FC<BlogTocProps> = ({ children }) => {
  return <div id="blog_toc">{children}</div>
}
const BlogBody: React.FC<BlogBodyProps> = ({ children }) => {
  return <div className="text-left">{children}</div>
}

Blog.Image = BlogImage;
Blog.UpdatedAt = BlogUpdatedAt;
Blog.Category = BlogCategory;
Blog.Title = BlogTitle;
Blog.Toc = BlogToc;
Blog.Body = BlogBody;
