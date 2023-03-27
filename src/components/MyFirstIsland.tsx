import { useState } from "react"

export function MyFirstIsland() {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    console.log(count);
    setCount(count + 1);
  }

  return (
    <button className="border" onClick={handleClick}>
      Clicked {count} times
    </button>
  )
}
