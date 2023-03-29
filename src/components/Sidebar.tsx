import React,{ReactNode,FC} from 'react'

type MySidebarProps = {
    children:ReactNode;
};

export const MySidebar:FC<MySidebarProps> = (props) => {
  return (
    <div className="sidebar bg-base-300 font-bold">
      {props.children}
    </div>
  )
}
