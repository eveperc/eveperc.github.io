import PaginationPrev, { PaginationPrevProps } from "./Pagination.Prev";
import PaginationCurrent, { PaginationCurrentProps } from "./Pagination.Current";
import PaginationNext, { PaginationNextProps } from "./Pagination.Next";

type PaginationProps = {
  children: React.ReactNode;
}
type PaginationComposition = {
  Prev: React.FC<PaginationPrevProps>;
  Current: React.FC<PaginationCurrentProps>;
  Next: React.FC<PaginationNextProps>;
}

const Pagenation: React.FC<PaginationProps> & PaginationComposition = ({ children }) => {
  return (
    <div className="pagination btn-group">
      {children}
    </div>
  )
}

Pagenation.Prev = PaginationPrev;
Pagenation.Current = PaginationCurrent;
Pagenation.Next = PaginationNext;
