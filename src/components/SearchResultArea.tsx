import { readOnlySearchAtom } from '../atoms/atoms';
import type { Article } from '../lib/newt.js';
import { atom, useAtom } from 'jotai';

type SearchResultProps = {
  articles: Article[];
};
export function SearchResult(props: SearchResultProps) {

  const [text] = useAtom(readOnlySearchAtom);

  const result = props.articles.map((a) => {
    const body = a.body.replace(/(<([^>]+)>)/gi, '');
    if (body.toLowerCase().indexOf(text) !== -1) {
      return (
        <div>{a.title}</div>
      );
    }
  });
  return (
    <div>
      {result}
      {text}
    </div>
  )
}
