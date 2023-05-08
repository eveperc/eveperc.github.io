export type CardButtonProps = {
  url: string;
  children: React.ReactNode;
}

export default function({ children, url }: CardButtonProps) {
  return (
    <div className="card-actions justify-end">
      <a href={url}>
        <button className="btn btn-primary">
          {children}
        </button>
      </a>
    </div>
  )
}
