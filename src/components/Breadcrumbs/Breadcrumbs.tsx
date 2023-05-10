import BreadcrumbsUnordered,{BreadcrumbsUnorderedProps} from './Breadcrumbs.Unordered';
import BreadcrumbsList,{BreadcrumbsListProps} from './Breadcrumbs.List';
type BreadcrumbsProps = {
  children: React.ReactNode
}

type BreadcrumbsComposition = {
  ul: React.FC<BreadcrumbsUnorderedProps>
  li: React.FC<BreadcrumbsListProps>
};

export const Breadcrumbs:React.FC<BreadcrumbsProps> & BreadcrumbsComposition = ({children}) => {
  return <div className="text-xl breadcrumbs">{children}</div>
};

Breadcrumbs.ul = BreadcrumbsUnordered;
Breadcrumbs.li = BreadcrumbsList;
