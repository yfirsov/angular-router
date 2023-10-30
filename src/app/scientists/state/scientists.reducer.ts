import { createFeature, createReducer, createSelector, on } from '@ngrx/store';
import { scientistsPageActions } from './scientists-page.actions';
import { scientistsActionsAPI } from './scientists.actions';
import { Scientist } from '../scientists.model';

export interface ScientistsState {
  scientists: Scientist[];
  isLoading: boolean;
  selectedId: number | null;
}

export const initialState: ScientistsState = {
  scientists: [],
  isLoading: false,
  selectedId: null,
};

export const scientistsFeature = createFeature({
  name: 'scientists',
  reducer: createReducer(
    initialState,
    on(
      scientistsPageActions.load,
      (state): ScientistsState => ({ ...state, isLoading: true })
    ),
    on(
      scientistsPageActions.select,
      (state, { id }): ScientistsState => ({
        ...state,
        selectedId: id,
      })
    ),
    on(
      scientistsActionsAPI.loadScientistsSuccess,
      (state, { scientists }): ScientistsState => ({
        ...state,
        scientists,
        isLoading: false,
      })
    ),
    on(
      scientistsActionsAPI.loadScientistsFailure,
      (state): ScientistsState => ({
        ...state,
        isLoading: false,
      })
    )
  ),
  extraSelectors: ({ selectSelectedId, selectScientists }) => ({
    selectSelectedScientist: createSelector(
      selectSelectedId,
      selectScientists,
      (selectedId, scientists) => scientists.find(s => s.id === selectedId)
    ),
  }),
});

export const {
  name,
  reducer,
  selectScientists,
  selectIsLoading,
  selectSelectedScientist,
  selectSelectedId,
} = scientistsFeature;
