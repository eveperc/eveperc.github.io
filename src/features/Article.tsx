import type { PostItem } from "@lib/newt";

import Card from "./Card";
import DaisyUIBudge from "@components/Elements/Badge/DaisyUIBudge";
import DaisyUIColors from "@/layouts/Colors";
type ArticlesProps = {
  article: PostItem;
}

export default function({ article }: ArticlesProps) {
  const url = `/articles/${article.slug}`

  return (
    <Card>
      <Card.Image url={url}>
        <img
          className="w-auto h-auto"
          src={article.thumbnail.src}
          alt={article.thumbnail.altText}
        />
      </Card.Image>
      <Card.Body>
        <Card.Title url={url}>
          {article.title}
          <DaisyUIBudge colors='btn-secondary'>NEW</DaisyUIBudge>
        </Card.Title>
      </Card.Body>
      <div className="card-actions p-5 flex justify-between">
        <Card.Category category={article.category} />
        <Card.Button url={url}>
          Read More
        </Card.Button>
      </div>
    </Card>
  )
}
