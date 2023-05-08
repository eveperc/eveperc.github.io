import type { ReactNode } from 'react'
import type { Category as CategoryType } from "../lib/newt"

type CategoryProps = {
  data: CategoryType[];
  url: string;
};

export function Category({data,url}:CategoryProps ) {
  const list = data.map((c,index) => (
    <a key={index} href={`${url}/categories/${c.slug}`}>
      <button className="btn btn-accent">
        {c.name}
      </button>
    </a>
  ));
  let style = `category p-10 bg-base-100 shadow-2xl border-2 border-base-200 rounded-lg font-bold\n`
  style += `md:mr-2`;
  return (
    <div className={style}>
      <div className="grid grid-cols-4 gap-5">
        {list}
      </div>
    </div>
  )
}
