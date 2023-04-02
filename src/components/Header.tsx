type MyHeaderProps = {
  url: string;
};
export function MyHeader(props: MyHeaderProps) {

  return (
    <div className="header navbar bg-base-300">
      <div className="flex-1 px-2 lg:flex-none">
        <a href="/" className="font-bold">
          <button className="text-lg btn btn-primary">Home</button>
          </a>
      </div>
      <div className="flex justify-end flex-1 px-2">
        <div className="flex items-stretch">
          <a href={`${props.url}/search`}>
            <button className="btn btn-outline btn-info">Search</button>
          </a>
        </div>
      </div>
    </div >
  );
}
