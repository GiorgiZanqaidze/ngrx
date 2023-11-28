import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import {addUser, addUsers, changeId, increment, removeUser} from './store/counter.action';
import {selectCounter, selectId, selectUserEntities} from './store/counter.selectors';
import {User} from "./store/types/user";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-first-project';

  constructor(private store: Store) {}

  counter = this.store.select(selectCounter)
  id = this.store.select(selectId)

  add() {
      this.store.dispatch(increment())
  }

  changeId() {
    this.store.dispatch(changeId())
  }
  userEntities = this.store.select(selectUserEntities)

  addUsers() {
    const users: User[] = [
      {
        name: "giorgi",
        age: 5,
        height: 5,
        id: Math.random() * 100
      },
      {
        name: "dwdwdw",
        age: 5,
        height: 5,
        id: Math.random() * 100
      }
    ]
    this.store.dispatch(addUsers({users: users}))
  }

  addUser() {
    const  user: User = {
      name: "giorgi",
      age: 5,
      height: 5,
      id: Math.random() * 100
    }
    this.store.dispatch(addUser({user: user}))
  }

  removeUser(id: number) {
    const string = id.toString()

    this.store.dispatch(removeUser({id: string}))
  }


}
