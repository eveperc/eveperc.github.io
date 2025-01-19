import React from 'react';
type Props = {
  children: React.ReactNode;
}
export default function Navbar({ children }: Props) {
  return (
    <div className="navbar bg-base-300 justify-between p-10" >
      {children}
    </div>
  );
}
