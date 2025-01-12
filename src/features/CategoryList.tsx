import type { CategoryItem } from "@lib/newt"

import Button from "@components/Button"

export type CategoriesListProps = {
  data: CategoryItem[];
  url: string;
  category?: string;
}

export default function({ data, url, category }: CategoriesListProps) {
  const isSelect = (name: string) => (
    <Button variant='success'>
      {name}
    </Button>
  )
  const isNotSelect = (name: string) => (
    <Button variant='accent'>
      {name}
    </Button>
  )
  const hasCategory = (name: string, slug: string, category?: string) => {
    if (slug && slug === category) {
      return isSelect(name)
    }
    return isNotSelect(name);
  }

  const list = (
    data.map((c, index) => (
      <a className="flex justify-center "
        key={index}
        href={`${url}/categories/${c.slug}`}
      >
        {hasCategory(c.name, c.slug, category)}
      </a>
    ))
  )
  return list;
}
