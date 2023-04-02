import type { ReactNode } from 'react'
import type { Category } from "../lib/newt"

type MySidebarProps = {
  children: ReactNode;
  category: Category[];
  url: string;
};

export function MySidebar(props: MySidebarProps) {
  const list = props.category.map((c) => (
    <a href={`${props.url}/categories/${c.slug}`}>
      <button className="btn btn-accent">
        {c.name}
      </button>
    </a>
  ));
  let style = `sidebar bg-base-300 shadow-2xl border-2 border-base-200 rounded-lg font-bold\n`
  style += `md:mr-2`;
  return (
    <div className={style}>
      {props.children}
      <div className="grid grid-col gap-5">
        {list}
      </div>
    </div>
  )
}
