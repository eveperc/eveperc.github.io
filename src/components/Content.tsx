import type React from "react";
import type { Article } from "../lib/newt";

type MyContentProps = {
  articles: Article[];
}
type TitleProps = {
  children: React.ReactNode;
}
type ImageProps = {
  children: React.ReactNode;
}

export const MyContent = ({ articles }: MyContentProps) => {
  if (!articles) {
    return (
      <div className="main">
        Not Contents
      </div>
    );
  }
  const cards = articles.map((article, index) => (
    <div key={index} className="card w-full md:w-96 bg-base-300 shadow-xl my-10">
      <figure className="bg-white">
        <img className="w-20 h-20" src={article.coverImage.src} alt={article.coverImage.altText} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          {article.title}
          <div className="badge badge-secondary">NEW</div>
        </h2>
        <div className="card-actions justify-end">
          <a href={`/articles/${article.slug}`}>
            <button className="btn btn-primary">Read More</button>
          </a>
        </div>
      </div>
    </div>
  ));

  return (
    <div className="main grid justify-center lg:grid-cols-2 xl:grid-cols-3">
      {cards}
    </div>
  );
}
