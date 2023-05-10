export type CardImageProps = {
  children: React.ReactNode;
  url: string;
}

export default function({ children, url }: CardImageProps) {
  return (
    <a href={url} className="bg-white rounded-2xl rounded-b-none">
      <figure className="h-52">
        {children}
      </figure>
    </a>
  )
}
