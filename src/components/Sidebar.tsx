import React, { ReactNode, FC } from 'react'
import { Category } from "../lib/newt.ts"
type MySidebarProps = {
  children: ReactNode;
  category: Category[];
  url:string;
};

export const MySidebar: FC<MySidebarProps> = (props) => {
  const list = props.category.map((c)=>(
    <a href={`${props.url}/categories/${c.slug}`}>
      {c.name}
    </a>
  ));
  return (
    <div className="sidebar bg-base-300 font-bold">
      {props.children}
      <div className="flex flex-col">
        {list}
      </div>
    </div>
  )
}
