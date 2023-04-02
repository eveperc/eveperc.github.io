import type { GetStaticPathsOptions } from "astro";
import type { Page } from "../lib/newt";

type PaginationProps = {
  page: Page
}
export function Pagination(props: PaginationProps) {
  return (
    <div className="pagination btn-group">
      {
        props.page.url.prev
          ? <a href={props.page.url.prev}>
            <button className="btn">«</button>
          </a>
          : null
      }
      <button className="btn">{props.page.currentPage}ページ</button>
      {
        props.page.url.next
          ? <a href={props.page.url.next}>
            <button className="btn">»</button>
          </a>
          : null
      }
    </div >
  );
}
