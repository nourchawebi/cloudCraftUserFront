import {User} from "./user";

export interface Feedback {
  id:number,
  rating:number,
  comment:string,
  createdAt:Date,
  user:User
}
