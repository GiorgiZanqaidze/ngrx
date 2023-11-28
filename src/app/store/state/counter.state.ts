import {createEntityAdapter, EntityAdapter, EntityState} from "@ngrx/entity";
import {User} from "../types/user";


export interface CounterState extends EntityState<User>{
  id: number
  counter: number
}


export const adapter: EntityAdapter<User> = createEntityAdapter()
