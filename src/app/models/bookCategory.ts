import {User} from "./user";
import {Book} from "./book";
import {Category} from "./category";

export interface bookCategory {
  user: User;
  book: Book;
  category: Category;
  file : File;
}
