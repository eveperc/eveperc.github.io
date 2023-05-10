export type BreadcrumbsListProps = {
  children: React.ReactNode;
}

export default function({ children }: BreadcrumbsListProps) {
  return (
    <li className="whitespace-pre-wrap break-all">{children}</li>
  )
}
