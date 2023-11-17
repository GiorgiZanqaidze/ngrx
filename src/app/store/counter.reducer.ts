import { createReducer, on } from '@ngrx/store';
import { changeId, increment } from './counter.action';

export interface counterStore {
    id: number
    counter: number
}
export const initialState: counterStore = {
    id: 2,
    counter: 0
};

export const counterReducer = createReducer(
    initialState,
    on(increment, (state) => {
        return {...state, counter: state.counter + 1}
    }),
    on(changeId, (state) => {
        return {...state, id: 4}
    })
  );