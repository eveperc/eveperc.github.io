export type CardTitleProps = {
  children: React.ReactNode;
  url: string;
}

export default function({ children, url }: CardTitleProps) {
  return (
    <a href={url}>
      <h2 className="card-title text-4xl justify-between">
        {children}
      </h2>
    </a>
  )
}
