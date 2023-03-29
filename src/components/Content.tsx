import type {Article} from "../lib/newt";

type MyContentProps ={
  articles:Article[];
}
export const MyContent = ({articles}:MyContentProps) =>{
  if (!articles) {
    return (
      <div className="main">
        Not Contents
      </div>
    );
  }
  const cards = articles.map((article) => (
    <div className="card w-full md:w-96 bg-base-100 shadow-xl my-10">
      <figure><img src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
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
    <div className="main">
      {cards}
    </div>
  );
}
