import type { CategoryItem } from "@lib/newt"

import DaisyUIBtn from '@components/Elements/Button/DaisyUIBtn';
import DaisyUIColors from '@layouts/Colors';

export type CardCategoryProps = {
  category: CategoryItem;
}

export default function({ category }: CardCategoryProps) {
  return (
    <a href={`/categories/${category.slug}`}>
      <DaisyUIBtn colors={DaisyUIColors.accent.accent}>
        {category.name}
      </DaisyUIBtn>
    </a>
  )
}
