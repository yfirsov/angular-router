import { createFeature, createReducer, createSelector, on } from '@ngrx/store';
import { ScientistsPageActions } from './scientists-page.actions';
import { ScientistsActionsAPI } from './scientists.actions';
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
      ScientistsPageActions.load,
      (state): ScientistsState => ({ ...state, isLoading: true })
    ),
    on(
      ScientistsPageActions.select,
      (state, { id }): ScientistsState => ({
        ...state,
        selectedId: id,
      })
    ),
    on(
      ScientistsActionsAPI.scientistsLoadedSuccess,
      (state, { scientists }): ScientistsState => ({
        ...state,
        scientists,
        isLoading: false,
      })
    ),
    on(
      ScientistsActionsAPI.scientistsLoadedFailure,
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
  selectScientists,
  selectIsLoading,
  selectSelectedScientist,
} = scientistsFeature;
