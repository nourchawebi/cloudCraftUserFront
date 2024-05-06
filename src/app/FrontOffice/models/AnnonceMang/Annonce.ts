import { React } from "./React";

export class Annonce {
  id_annonce!: number;
  title!: string;
  annonce_description!: string;
  picture!: File;
  annonce_date!: Date;
  startDate!: Date;
  typeAnnonce!: TypeAnnonce;
  typeInternship!: TypeInternship;
  likes!: number;
  dislikes!: number;
  //locationLx!: string;
  //locationLy!: string;
  governorate!: string;
  //country!: string;
  user!: any; // Replace 'any' with your User model
  comments!: any[]; // Replace 'any' with your Comment model
  reacts!: any[]; // Replace 'any' with your React model
  
}
  
  export enum TypeAnnonce {
    INTERNSHIP = "INTERNSHIP",
    LOST_AND_FOUND = "LOST_AND_FOUND",
    JOB_OFFER = "JOB_OFFER",
    OTHER="OTHER"
  }
  
  export enum TypeInternship {
    PFE_INTERNSHIP = "PFE_INTERNSHIP",
    INTRODUCTORY_INTERNSHIP = "INTRODUCTORY_INTERNSHIP",
    INGINEER_INTERNSHIP = "INGINEER_INTERNSHIP"
}

  
  export class User {
    id!: number;
    firstName!: string;
    lastName!: string;
    email!: string;
    password!: string;
    mfaEnabled!: boolean;
    notLocker!: boolean;
    birthDate!: Date;
    enable!: boolean;
    comments!: Comment[];
    reacts!: React[];
   
}
  



  