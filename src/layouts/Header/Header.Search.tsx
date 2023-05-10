export type HeaderSearchProps = {
  url : string;
}

export default function({url}:HeaderSearchProps) {
  return (
    <div className="flex justify-end flex-1 px-2">
      <div className="flex items-stretch">
        <a href={`${url}/search`}>
          <button className="btn btn-outline btn-info">Search</button>
        </a>
      </div>
    </div>
  )
}

