export interface RegisterRequest{
  firstName?:string, // ? means optional
  lastName?:string,
  email?:string, // ? means optional
  password?:string,
  mfaEnabled?:string,
  role?: string,
  birthdate?:string,
  classType?:string,


}