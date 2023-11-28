import { createFeatureSelector, createSelector } from '@ngrx/store';
import {adapter, CounterState} from "./state/counter.state";

const { selectAll: entitiesSelectAll } = adapter.getSelectors();

const selectFeatureCount = createFeatureSelector<CounterState>('count');

export const selectCounter = createSelector(
    selectFeatureCount,
  (state) => state.counter
);

export const selectId = createSelector(
    selectFeatureCount,
  (state) => state.id
);


export const selectUserEntities = createSelector(
  selectFeatureCount,
  entitiesSelectAll
)
