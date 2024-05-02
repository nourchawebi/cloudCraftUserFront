import {Car} from "./car";
import {Participation} from "./participation";

export interface User {
  id?: number;
  firstName?: string;
  lastName?: string;
  email?: string;
  role?: string;
  birthDate?: string;
  mfaEnabled?: boolean;
  sub?: string;
  iat?: number;
  exp?: number;
  classeType?:string;
  picture?:string;
}
