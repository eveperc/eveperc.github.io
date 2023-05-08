export type CardImageProps = {
  children: React.ReactNode;
}

export default function({ children }: CardImageProps) {
  return (
    <figure className="bg-white">
      {children}
    </figure>
  )
}
