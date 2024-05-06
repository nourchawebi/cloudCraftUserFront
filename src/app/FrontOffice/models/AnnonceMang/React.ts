import { User } from "./Annonce";

export class React {
    id_react!: number;
   typeReact!: TypeReact ;
    user!: User;
    likes!:number;
    dislikes!:number;
}

export enum TypeReact {
    LIKE = 'LIKE',
    DISLIKE = 'DISLIKE'
}