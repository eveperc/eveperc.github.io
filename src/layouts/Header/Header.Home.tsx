export type HeaderHomeProps = {
}

export default function({ }: HeaderHomeProps) {
  return (
    <div className="flex-1 px-2 lg:flex-none">
      <a href="/" className="font-bold">
        <button className="text-lg btn btn-primary">Home</button>
      </a>
    </div>
  )
}
