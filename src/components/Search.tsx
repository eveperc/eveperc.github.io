import { useAtom } from 'jotai';
import { searchAtom } from '../atoms/atoms.js';
import type {Article} from '../lib/newt.js';

export function SearchComponent(articles:Article[]) {
  const [text, setText] = useAtom(searchAtom);
  const handleChange = (e: any) => {
    setText(e.target.value)
  }
  return (
    <input type="text" placeholder="検索" className="input input-bordered input-info w-full max-w-xs" value={text} onChange={handleChange} />
  )
}
