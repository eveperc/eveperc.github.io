import type { PostItem } from "@lib/newt";
import Card from "./Card";
type ArticlesProps = {
  article: PostItem;
  key: number;
}
export default function({ article, index }: ArticlesProps) {
  return (
    <Card>
      <Card.Image>
        <img
          className="w-20 h-20"
          src={article.thumbnail.src}
          alt={article.thumbnail.altText}
        />
      </Card.Image>
      <Card.Body>
        <Card.Title>
          {article.title}
          <div className="badge badge-secondary">NEW</div>
        </Card.Title>
        <div className="mt-auto flex justify-between">
          <Card.Category category={article.category} />
          <Card.Button url={`/articles/${article.slug}`}>
            Read More
          </Card.Button>
        </div>
      </Card.Body>
    </Card>
  )
}
