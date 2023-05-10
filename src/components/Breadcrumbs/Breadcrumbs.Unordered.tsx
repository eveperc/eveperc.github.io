export type BreadcrumbsUnorderedProps = {
  children: React.ReactNode;
}

export default function({ children }: BreadcrumbsUnorderedProps) {
  return (
    <ul className="flex flex-wrap">{children}</ul>
  )
};
