import { useAtom } from 'jotai';
import { searchAtom } from '@stores/atoms';

export default function() {
  const [text, setText] = useAtom(searchAtom);
  const handleChange = (e: any) => {
    setText(e.target.value)
  }
  return (
    <input
      type="text"
      placeholder="検索"
      className="w-full sub input input-bordered input-info"
      value={text}
      onChange={handleChange} />
  )
}
