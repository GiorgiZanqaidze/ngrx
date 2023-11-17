import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { changeId, increment } from './store/counter.action';
import { Observable } from 'rxjs';
import { counterStore } from './store/counter.reducer';
import { selectCounter, selectId } from './store/counter.selectors';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-first-project';

  constructor(private store: Store<{count: counterStore}>) {
    this.counter = store.select(selectCounter)
    this.counter = store.select(selectId)
  }

  counter!: Observable<number>
  id!: Observable<number>

  add() {
      this.store.dispatch(increment())
  }

  changeId() {
  this.store.dispatch(changeId())}


}
