import FooterIcon,{FooterIconProps} from "./Footer.Icon"
import FooterCopyright,{FooterCopyrightProps} from "./Footer.Copyright";

type FooterComposition = {
  Icon:React.FC<FooterIconProps>
  Copyright:React.FC<FooterCopyrightProps>
}

type FooterProps = {
  children: React.ReactNode;
}

const Footer:React.FC<FooterProps> & FooterComposition  = ({children}) => {
  return (
    <footer className="footer footer-center p-10 bg-primary text-primary-content">
      {children}
    </footer>
  )
}

Footer.Icon = FooterIcon;
Footer.Copyright = FooterCopyright;

export default Footer;
