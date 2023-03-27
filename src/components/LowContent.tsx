import React,{ReactNode,FC} from 'react'

type MyLowContentProps = {
  children: ReactNode;
}
export const MyLowContent: FC<MyLowContentProps> = (props) => {
  return (
    <div className="lorem app">
      {props.children}
    </div>
  );
}
