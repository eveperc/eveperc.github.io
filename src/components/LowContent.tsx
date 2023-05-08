import React,{ReactNode,FC} from 'react'

type LowContentProps = {
  children: ReactNode;
}
export const LowContent: FC<LowContentProps> = (props) => {
  return (
    <div className="low">
      {props.children}
    </div>
  );
}
