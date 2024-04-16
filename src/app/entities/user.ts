import {Car} from "./car";
import {Participation} from "./participation";

export interface User {
  userId: Number
  participations: [Participation]
}
