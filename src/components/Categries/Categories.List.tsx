import type { CategoryItem } from "@lib/newt"

export type CategoriesListProps = {
  data: CategoryItem[];
  url: string;
}

export default function({ data, url }: CategoriesListProps) {
  const list = (
    data.map((c, index) => (
      <a key={index} href={`${url}/categories/${c.slug}`}>
        <button className="btn btn-accent">
          {c.name}
        </button>
      </a>
    ))
  )
  return list;
}
