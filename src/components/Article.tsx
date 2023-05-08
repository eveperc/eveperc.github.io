import type { FC, ReactNode } from "react";
import type { Category as CategoryType} from "../lib/newt.ts"

type ArticlesProps = {
  children: ReactNode;
}
type ArticleComposition = {
  Body: FC<BodyProps>
  Title: FC<TitleProps>;
  Image: FC<ImageProps>;
  Category: FC<CategoryProps>;
  UpdatedAt: FC<UpdatedAtProps>;
  Button: FC<ButtonProps>;
}
type BodyProps = {
  children: ReactNode;
}
type TitleProps = {
  children: ReactNode;
}
type ImageProps = {
  children: ReactNode;
}
type CategoryProps = {
  category: CategoryType;
}
type UpdatedAtProps = {
  children: ReactNode;
}
type ButtonProps = {
  url: string;
  children: ReactNode;
}

export const Article: FC<ArticlesProps> & ArticleComposition = ({ children }) => {
  let style = "card w-full md:w-96 bg-base-300 shadow-xl my-10";
  return <div className={style}>{children}</div>
}
const Body: FC<BodyProps> = ({ children }) => {
  return <div className="card-body">{children}</div>
}
const Title: FC<TitleProps> = ({ children }) => {
  return <h2 className="card-title">{children}</h2>
}

const Image: FC<ImageProps> = ({ children }) => {
  return <figure className="bg-white">{children}</figure>
}
const Category: FC<CategoryProps> = ({ category }) => {
  return (
    <div className="card-actions justify-start">
      <a href={`/categories/${category.slug}`}>
        <button className="btn btn-accent">
          {category.name}
        </button>
      </a>
    </div>
  )
}
const UpdatedAt: FC<UpdatedAtProps> = ({ children }) => {
  return <div>{children}</div>
}

const Button: FC<ButtonProps> = ({ children, url }) => {
  return (
    <div className="card-actions justify-end">
      <a href={url}>
        <button className="btn btn-primary">
          {children}
        </button>
      </a>
    </div>
  )
}
Article.Body = Body;
Article.Title = Title;
Article.Image = Image;
Article.Category = Category;
Article.UpdatedAt = UpdatedAt;
Article.Button = Button;
