import { ChapterRepresentation } from "./chapter-representation";
import { RatingRepresentation } from "./rating-representation";
import { SummaryRepresentation } from "./summary-representation";

export interface CourseDetails{
    id:number;
    name:string;
    description:string;
    uneversityYear:string;
    image?:File|null;
    imageUrl?:string;
    imageName?:string;
    courseCategory:String;
    chapters:Array<ChapterRepresentation>;
    ratings:Array<RatingRepresentation>;
    summaries:Array<SummaryRepresentation>;
}