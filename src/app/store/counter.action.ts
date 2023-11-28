import {createAction, props} from '@ngrx/store';
import {User} from "./types/user";

export const increment = createAction('[Counter Component] Increment');

export const changeId = createAction('[Counter Component] changeId');


export const addUsers = createAction(
  "[Counter Component] ADD USERS",
    props<{users: User[]}>()
)


export const addUser = createAction(
  "[Counter Component] ADD USER",
  props<{user: User}>()
)


export const removeUser = createAction(
  "[Counter Component] Remove USER",
  props<{id: string}>()
)

