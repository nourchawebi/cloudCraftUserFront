import { FileRepresentation } from "./file-representation";
import { RatingRepresentation } from "./rating-representation";

export interface SummaryRepresentation{
    id:number;
    title:string;
    files?:Array<FileRepresentation>;
    ratings:Array<RatingRepresentation>;
    // private User owner;
    description:string;
}