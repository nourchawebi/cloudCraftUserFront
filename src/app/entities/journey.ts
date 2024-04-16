import {Participation} from "./participation";

export interface Journey {
  journeyId : number,
  price: number,
  day: string,
  leavingTime: string
  returnTime: string
  availablePlaces: number
  participations: [Participation]
}
