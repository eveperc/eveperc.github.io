import type { Page } from "@myTypes/index";
import { match, P } from "ts-pattern";

export type PaginationPrevProps = {
  page: Page;
}

export default function({ page }: PaginationPrevProps) {
  const prevButton = (
    <a href={page.url.prev}>
      <button className="btn">«</button>
    </a>
  )
  return match(page.url.prev)
    .with(undefined, () => null)
    .with(P.string, () => prevButton)
    .exhaustive()
}
