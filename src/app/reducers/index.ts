import { isDevMode } from '@angular/core';
import { ActionReducer, ActionReducerMap, MetaReducer } from '@ngrx/store';
import {
  scientistsFeature,
  ScientistsState,
} from '../scientists/state/scientists.reducer';

export interface State {
  [scientistsFeature.name]: ScientistsState;
}

export const reducers: ActionReducerMap<State> = {
  [scientistsFeature.name]: scientistsFeature.reducer,
};

export const debug =
  (reducer: ActionReducer<State>): ActionReducer<State> =>
  (state, action) => {
    console.log('state', state);
    console.log('action', action);

    return reducer(state, action);
  };

export const metaReducers: MetaReducer<State>[] = isDevMode() ? [debug] : [];
