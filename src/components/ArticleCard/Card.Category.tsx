import type { CategoryItem } from "@lib/newt"

import DaisyUIBtn from '@components/Elements/Button/DaisyUIBtn';

export type CardCategoryProps = {
  category: CategoryItem;
}

export default function({ category }: CardCategoryProps) {
  return (
    <a href={`/categories/${category.slug}`}>
      <DaisyUIBtn colors='btn-accent'>
        {category.name}
      </DaisyUIBtn>
    </a>
  )
}
