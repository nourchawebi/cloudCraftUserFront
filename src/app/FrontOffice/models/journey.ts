import {Participation} from "./participation";
import {Motorized} from "./motorized";
import {Location} from "./location";
import {Car} from "./car";

export interface Journey {
  journeyId : number,
  price: number,
  day: string,
  leavingTime: string
  returnTime: string
  availablePlaces: number
  traject:Location[]
  participations: Participation[]
  motorized: Motorized
  car:Car
}
