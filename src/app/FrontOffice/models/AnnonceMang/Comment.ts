import { Annonce, User } from "./Annonce";

export class Comment {
    id_comment!: number;
    comment_description!: string;
    comment_date!: Date;
    annonce!: Annonce;
    user!: User;
}