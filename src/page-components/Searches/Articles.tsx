import { readOnlySearchAtom } from '@stores/atoms';
import type { PostItem } from '@lib/newt';
import Article from "@components/ArticleCard/Article";
import { useAtom } from 'jotai';

type SearchResultProps = {
  articles: PostItem[];
};
export default function({ articles }: SearchResultProps) {
  const [text] = useAtom(readOnlySearchAtom);

  const result = articles.filter((a) => {
    const body = a.content.replace(/(<([^>]+)>)/gi, '');
    if (body.toLowerCase().indexOf(text) !== -1) {
      return a;
    }
  });

  return result.map((article, index) => (
    <Article article={article} key={index} />
  ))
}
