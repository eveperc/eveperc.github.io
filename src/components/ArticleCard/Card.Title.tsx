export type CardTitleProps = {
  children: React.ReactNode;
}

export default function({ children }: CardTitleProps) {
  return (
    <h2 className="card-title">{children}</h2>
  )
}
