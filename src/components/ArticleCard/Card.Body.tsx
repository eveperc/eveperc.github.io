export type CardBodyProps = {
  children: React.ReactNode;
}
export default function ({ children }:CardBodyProps){
  return (
    <div className="card-body">{children}</div>
  )
}
