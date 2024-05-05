import {Category} from "./category";

export interface Book {
  idBook: number;
  title: string;
  picture: File;
  author: string;
  description: string;
  category: Category
}
