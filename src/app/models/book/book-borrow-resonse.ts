export interface BookBorrowResonse{
  id?: number;
  loanDate? : Date;
  dueDate? : Date;
  returned? : boolean;
  idBook? : number;
  title? : string;
  author? : string;
  description?: string;
  coverPicture?: String;
  owner? : string;
  category?: string;
}
