import { ChapterRepresentation } from "./chapter-representation";
import { ContentRepresentation } from "./content-representation";
import { CourseRepresentation } from "./course-representation";
import { FileRepresentation } from "./file-representation";
import { RatingRepresentation } from "./rating-representation";
import { SummaryRepresentation } from "./summary-representation";
import { UserRepresentation } from "./user-representation";
export class PayloadSerialization{
  static defaultCourseImageUrl:string="https://images.shiksha.com/mediadata/ugcDocuments/images/wordpressImages/2022_08_MicrosoftTeams-image-13-2-1.jpg"

    static createCourseRepresentation(course:any):CourseRepresentation{
        return {
          id:course?.id,
          name:course?.name,
          description:course?.description,
          uneversityYear:course?.uneversityYear||null,
          imageUrl:course?.image?.url||PayloadSerialization.defaultCourseImageUrl,
          imageName:course?.image?.fileName,
          courseCategory:course?.courseCategory
        }
      }

    static getDetailedCourse(course:any){
        return {
          id:course.id,
          name:course.name,
          description:course.description,
          uneversityYear:course.universityYear,
          imageUrl:course.image.url,
          imageName:course.image.fileName,
          courseCategory:course.courseCategory,
          chapters:PayloadSerialization.getChaptersRepresentation(course.chapters),
          ratings:PayloadSerialization.getRatingsRepresentation(course.ratings),
          summaries:PayloadSerialization.getSummariesRepresentation(course.summaries)
        }
      }
      static getChaptersRepresentation(chapters:Array<any>):Array<ChapterRepresentation>{
        if(chapters!=null)
        return chapters?.map(chapter=>PayloadSerialization.getChapterRepresentation(chapter));
        return [];
      }
      static getChapterRepresentation(chapter:any):ChapterRepresentation{
          return {
            id:chapter.id,
            title:chapter.title,
            // chapterContent;
            // summaries;
            ratings:PayloadSerialization.getRatingsRepresentation(chapter?.ratings),
             description:chapter.description,
             chapterContent:PayloadSerialization.getContentReresentationArray(chapter.content),
             summaries:PayloadSerialization.getSummariesRepresentation(chapter.summaries),
             owner:PayloadSerialization.getUserRepresentation(chapter.owner)
          };
      }


     

     static getRatingsRepresentation(ratings:Array<any>):Array<RatingRepresentation>{
      if(ratings==null) return  [];
        return ratings?.map(rating=>{
          return this.getRatingRepresentation(rating);
        })
      }

      static getRatingRepresentation(rating:any):RatingRepresentation{
            return {
            id:rating.id,
           content:rating.content,
            value:rating.value,
            createdAt:rating.createdAt,
            owner:PayloadSerialization.getUserRepresentation(rating.owner)
            }
          }
        
  
  

     static getUserRepresentation(user:any):UserRepresentation{
      return {
        id:user?.id,
        email:user?.email||"no user",

      }
     }
     static getSummariesRepresentation(summaries:Array<any>){
      if(summaries==null) return [];
        return summaries?.map(summary=>this.getSummaryRepresentation(summary))}

      static getSummaryRepresentation(summary:any):SummaryRepresentation{
        return {
          id:summary.id,
          title:summary.title,
          ratings:this.getRatingsRepresentation(summary.ratings),
          // private User owner;
          files:this.getFilesRepresentaionFromApi(summary.files),
          description:summary.description,
          owner:this.getUserRepresentation(summary.owner)
        }
      }
        static getContentReresentationArray(content:Array<any>){
            if(content!=null) return content.map(content=>this.getContentRepresentation(content));
            return [];
        }


      static getContentRepresentation(content:any):ContentRepresentation{
        return {
            id:content.contentId,
            title:content.contentTitle,
            files:PayloadSerialization.getFilesRepresentaionFromApi(content.files),
            description:content.contentDescription,
            category:content.contentCategory
        }
      }

      static getFilesRepresentaionFromApi(files:Array<any>){

        if(files!=null){
            return files.map(file=>this.getFileRepresentationFromAPI(file));
        }
        return [];
      }
      static getFileRepresentationFromAPI(file:any):FileRepresentation{
            return {
                id:file.id,
                fileName:file.fileName,
                fileLocation:file.fileLocation,
                url:file.url
            }
      }
    //   static getFileRepresentationFromFileObject(file:File):FileRepresentation{
    //         return {

    //         }
    //   }
}