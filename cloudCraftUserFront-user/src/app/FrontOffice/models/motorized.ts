import {Journey} from "./journey";
import {Car} from "./car";
import {Participation} from "./participation";

export interface Motorized {
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
  car : [Car]
  participation: [Participation]
  journeys : [Journey]
}
