export class RegisterRequest{
  firstName?:string;// ? means optional
  lastName?:string;
  email?:string; // ? means optional
  password?:string;
  mfaEnabled?:boolean;
  role?: string;
  birthDate?: Date;
  classType?:string;
  picture?: File;


}
