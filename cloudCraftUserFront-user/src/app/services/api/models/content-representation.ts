import { FileRepresentation } from "./file-representation";

export interface ContentRepresentation{
    id:number;
    title:string;
    files:Array<FileRepresentation>;
    description:string;
    category:string
}