import {BookBorrowResonse} from "./book-borrow-resonse";

export interface PageResponseBookBorrowResponse{
  content?: Array<BookBorrowResonse>;
  first?: boolean;
  last?: boolean;
  number?: number;
  size?: number;
  totalElements?: number;
  totalPages?: number;
}
