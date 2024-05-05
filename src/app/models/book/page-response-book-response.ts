import {BookResponse} from "./book-response";

export interface PageResponseBookResponse {
  content?: Array<BookResponse>;
  first?: boolean;
  last?: boolean;
  number?: number;
  size?: number;
  totalElements?: number;
  totalPages?: number;
}
