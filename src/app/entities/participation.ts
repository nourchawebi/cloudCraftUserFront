import {Journey} from "./journey";
import {User} from "./user";

export interface Participation {
  participationId : Number,
  carpooled: User,
  journey: Journey
}
