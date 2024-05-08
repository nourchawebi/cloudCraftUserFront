import {User} from "../../../../../cloudCraftUserFront-user/src/app/FrontOffice/models/user";

export interface Feedback {
  id:number,
  rating:number,
  comment:string,
  createdAt:Date,
  user:User
}
