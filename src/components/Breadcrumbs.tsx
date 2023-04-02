type BreadcrumbsProps = {
  title: string,
}
const homeUrl = import.meta.env.SITE_URL;
export function Breadcrumbs(props: BreadcrumbsProps) {
  return (
    <div className="sub text-sm breadcrumbs">
      <ul>
        <li><a href={homeUrl}>Home</a></li>
        <li>{props.title}</li>
      </ul>
    </div>
  )
}
