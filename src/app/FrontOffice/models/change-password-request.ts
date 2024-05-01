export interface ChangePasswordRequest{
  email?:string,
  currentPassword?:string,
  newPassword?:string,
  confirmationPassword?:string
}
