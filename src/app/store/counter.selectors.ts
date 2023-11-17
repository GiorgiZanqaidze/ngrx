import { createFeatureSelector, createSelector } from '@ngrx/store';
import { counterStore } from './counter.reducer';

const selectFeatureCount = createFeatureSelector<counterStore>('count');

export const selectCounter = createSelector(
    selectFeatureCount,
  (state) => state.counter
);

export const selectId = createSelector(
    selectFeatureCount,
  (state) => state.id
);