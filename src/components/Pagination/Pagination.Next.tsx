import type { Page } from '@myTypes/index';
import { match, P } from 'ts-pattern';

export type PaginationNextProps = {
  page: Page;
}

export default function({ page }: PaginationNextProps) {
  const nextButton = (
    <a href={page.url.next}>
      <button className="btn">»</button>
    </a>
  )
  return match(page.url.next)
    .with(undefined, () => null)
    .with(P.string, () => nextButton)
    .exhaustive()
}
