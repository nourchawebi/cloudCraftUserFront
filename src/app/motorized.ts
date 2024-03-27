import {Journey} from "./journey";
import {Car} from "./car";
import {Participation} from "./participation";

export interface Motorized {
  userId : Number
  car : [Car]
  particpations: [Participation]
  journeys : [Journey]
}
