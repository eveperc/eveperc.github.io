import { MyContent } from "../components/Content";
import { readOnlySearchAtom } from '../atoms/atoms';
import type { Article } from '../lib/newt.js';
import { useAtom } from 'jotai';

type SearchResultProps = {
  articles: Article[];
};
export function SearchResult(props: SearchResultProps) {

  const [text] = useAtom(readOnlySearchAtom);

  const result = props.articles.filter((a) => {
    const body = a.body.replace(/(<([^>]+)>)/gi, '');
    if (body.toLowerCase().indexOf(text) !== -1) {
      return a;
    }
  });
  return (
    <MyContent articles={result} />
  )
}
