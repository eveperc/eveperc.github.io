import HeaderHome, { HeaderHomeProps } from "./Header.Home";
import HeaderSearch, { HeaderSearchProps } from "./Header.Search";
import DaisyUIColors from '@layouts/Colors'

type HeaderComposition = {
  Home: React.FC<HeaderHomeProps>;
  Search: React.FC<HeaderSearchProps>;
}

type HeaderProps = {
  children: React.ReactNode;
}

const Header: React.FC<HeaderProps> & HeaderComposition = ({ children }) => {
  const daisyUI = `navbar bg-${DaisyUIColors.base[300]}\n`
  const display = 'flex justify-between\n';
  const padding = 'p-10\n';
  const style = daisyUI + display + padding;
  return (
    <div className={style}>
      {children}
    </div>
  )
}
Header.Home = HeaderHome;
Header.Search = HeaderSearch;
export default Header;
