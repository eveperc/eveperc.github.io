type BreadcrumbsProps = {
  children: React.ReactNode
}

type BreadcrumbsComposition = {
  ul: React.FC<BreadcrumbsUnorderedProps>
  li: React.FC<BreadcrumbsListProps>
};

type BreadcrumbsUnorderedProps = {
  children: React.ReactNode;
}
type BreadcrumbsListProps = {
  children: React.ReactNode;
}

export const Breadcrumbs:React.FC<BreadcrumbsProps> & BreadcrumbsComposition = ({children}) => {
  return <div className="text-sm breadcrumbs">{children}</div>
};

const ul:React.FC<BreadcrumbsUnorderedProps> = ({children}) => {
  return <ul>{children}</ul>
};

const li:React.FC<BreadcrumbsListProps> = ({children}) => {
  return <li>{children}</li>
}

Breadcrumbs.ul = ul;
Breadcrumbs.li = li;
