import { UserRepresentation } from "./user-representation";

export interface RatingRepresentation{
    id:number;
    content:string;
    value:number;
    owner:UserRepresentation;
    createdAt:Date;
    
}