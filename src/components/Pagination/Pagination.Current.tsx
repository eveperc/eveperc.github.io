import type { Page } from '@myTypes/index';

export type PaginationCurrentProps = {
  page: Page;
}

export default function({ page }: PaginationCurrentProps) {
  return (
    <button className="btn">
      {page.currentPage}ページ
    </button>
  )
}
