import HeaderHome, { HeaderHomeProps } from "./Header.Home";
import HeaderSearch, { HeaderSearchProps } from "./Header.Search";

type HeaderComposition = {
  Home: React.FC<HeaderHomeProps>;
  Search: React.FC<HeaderSearchProps>;
}

type HeaderProps = {
  children: React.ReactNode;
}

const Header: React.FC<HeaderProps> & HeaderComposition = ({ children }) => {
  return (
    <div className="navbar bg-base-300 p-10">
      {children}
    </div>
  )
}
Header.Home = HeaderHome;
Header.Search = HeaderSearch;
export default Header;
