import { RatingRepresentation } from "src/app/services/api/models/rating-representation";

export class RatingUtilFunction{
    static calcRating(ratings:Array<RatingRepresentation> ):number{
        let ratingsValuesCount:number=0;
        let ratingAvg:number;
        ratings.forEach(rating=>{
            ratingsValuesCount+=rating.value;
        })
        ratingAvg=ratingsValuesCount/ratings.length;
        return ratingAvg;
    }
    
}