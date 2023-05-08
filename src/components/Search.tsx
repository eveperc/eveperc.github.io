import { useAtom } from 'jotai';
import { searchAtom } from '../atoms/atoms';

export function SearchComponent() {
  const [text, setText] = useAtom(searchAtom);
  const handleChange = (e: any) => {
    setText(e.target.value)
  }
  return (
    <div className="mx-auto w-4/5 bg-base-200 p-10 shadow-2xl border-2 border-base-200 rounded-lg">
      <div className="mx-auto w-2/5">
        <input type="text" placeholder="検索" className="w-full sub input input-bordered input-info" value={text} onChange={handleChange} />
      </div>
    </div>
  )
}
