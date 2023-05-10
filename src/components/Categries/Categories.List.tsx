import type { CategoryItem } from "@lib/newt"
import DaisyUIBtn from "@components/Elements/Button/DaisyUIBtn";
import DaisyUIColors from "@/layouts/Colors";

export type CategoriesListProps = {
  data: CategoryItem[];
  url: string;
  category?: string;
}

export default function({ data, url, category }: CategoriesListProps) {
  const isSelect = (name: string) => (
    <DaisyUIBtn colors='btn-success'>
      {name}
    </DaisyUIBtn>
  )
  const isNotSelect = (name: string) => (
    <DaisyUIBtn colors='btn-accent'>
      {name}
    </DaisyUIBtn>
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
