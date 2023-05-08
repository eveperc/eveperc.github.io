import type { Article, Category } from "../lib/newt";
import { newtClient } from "../lib/newt";

const { items: categoryData } = await newtClient.getContents<Article>({
  appUid: "blog",
  modelUid: "article",
  query: {
    select: ["category"],
  },
});

export const categoryContent = categoryData
  .map((category: Article): Category => {
    return {
      name: category.category.name,
      slug: category.category.slug,
    };
  })
  .filter(
    (category, index, self) =>
      self.findIndex((e) => e.name === category.name) === index
  );

