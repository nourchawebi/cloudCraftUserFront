import { ChapterRepresentation } from "./chapter-representation";
import { ContentRepresentation } from "./content-representation";
import { CourseRepresentation } from "./course-representation";
import { FileRepresentation } from "./file-representation";
import { SummaryRepresentation } from "./summary-representation";
export class PayloadSerialization{
  static defaultCourseImageUrl:string="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.shutterstock.com%2Fsearch%2Fcourses&psig=AOvVaw3BjcR_wavkSkumv7R1shFg&ust=1713171126033000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCJChmfepwYUDFQAAAAAdAAAAABAE"

    static createCourseRepresentation(course:any):CourseRepresentation{
        return {
          id:course.id,
          name:course.name,
          description:course.description,
          uneversityYear:course.uneversityYear||null,
          imageUrl:course.image.url||PayloadSerialization.defaultCourseImageUrl,
          imageName:course.image.fileName,
          courseCategory:course.courseCategory
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
            ratings:PayloadSerialization.getRatingsRepresentation(chapter.ratings),
             description:chapter.description,
             chapterContent:PayloadSerialization.getContentReresentationArray(chapter.content),
             summaries:PayloadSerialization.getSummariesRepresentation(chapter.summaries)
          };
      }


     static getRatingsRepresentation(ratings:Array<any>){
        return ratings?.map(rating=>{
          return {
          id:rating.id,
          description:rating.description,
          title:rating.title,
          createdAt:rating.createdAt
          }
        })
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
          description:summary.description
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