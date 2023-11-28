import { createReducer, on } from '@ngrx/store';
import {addUser, addUsers, changeId, increment, removeUser} from './counter.action';
import {adapter, CounterState} from "./state/counter.state";

export const initialState: CounterState = adapter.getInitialState({
  id: 2,
  counter: 0
}) ;

export const counterReducer = createReducer(
    initialState,
    on(increment, (state) => {
        return {...state, counter: state.counter + 1}
    }),
    on(changeId, (state) => {
        return {...state, id: 4}
    }),

    on(addUsers, (state, {users}) => {
      return adapter.addMany(users, {...state, counter: state.counter + 2})
    }),

    on(addUser, (state, {user}) => {
      return adapter.addOne(user, {...state, counter: state.counter + 1})
    }),

    on(removeUser, (state, {id}) => {
      return adapter.removeOne(id, state)
    })
  );
