import type { PostItem, CategoryItem } from "@lib/newt";
import { newtClient } from "@lib/newtClient";

const { items: categoryData } = await newtClient.getContents<PostItem>({
  appUid: "blog",
  modelUid: "article",
  query: {
    select: ["category"],
  },
});

export const categoryContent = categoryData
  .map((category: PostItem): CategoryItem => {
    return {
      _id: category.category._id,
      _sys: category.category._sys,
      name: category.category.name,
      slug: category.category.slug,
    };
  })
  .filter(
    (category, index, self) =>
      self.findIndex((e) => e.name === category.name) === index
  );

