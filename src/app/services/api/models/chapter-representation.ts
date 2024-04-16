import { ContentRepresentation } from "./content-representation";
import { RatingRepresentation } from "./rating-representation";
import { SummaryRepresentation } from "./summary-representation";

export interface ChapterRepresentation{
    id:number;
    title:string;
    chapterContent:Array<ContentRepresentation>;
    // summaries;
    ratings:Array<RatingRepresentation>;
    summaries:Array<SummaryRepresentation>;
    description:string;

}