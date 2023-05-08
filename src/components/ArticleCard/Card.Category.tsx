import type { CategoryItem } from "@lib/newt"

export type CardCategoryProps = {
  category: CategoryItem;
}

export default function({ category }: CardCategoryProps) {
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
