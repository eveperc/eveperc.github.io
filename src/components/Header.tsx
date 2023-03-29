export function MyHeader() {

  return (
    <div className="header navbar bg-base-300">
      <div className="flex-1 px-2 lg:flex-none">
        <a href="/" className="text-lg btn btn-ghost font-bold">NeoEveLog</a>
      </div>
      <div className="flex justify-end flex-1 px-2">
        <div className="flex items-stretch">
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost rounded-btn">Menu</label>
            <ul tabIndex={0} className="menu dropdown-content p-2 shadow bg-base-100 rounded-box w-52 mt-4">
              <li><a>Item 1</a></li>
              <li><a>Item 2</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
