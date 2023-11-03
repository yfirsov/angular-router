import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { createFeature, createReducer, createSelector, on } from '@ngrx/store';
import { ScientistsPageActions } from './scientists-page.actions';
import { ScientistsActionsAPI } from './scientists.actions';
import { Scientist } from '../scientists.model';

export interface ScientistsState extends EntityState<Scientist> {
  isLoading: boolean;
  selectedId: number | null;
}

export const adapter: EntityAdapter<Scientist> =
  createEntityAdapter<Scientist>();

export const initialState: ScientistsState = adapter.getInitialState({
  isLoading: false,
  selectedId: null,
});

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
        ...adapter.setAll(scientists, { ...state, isLoading: false }),
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
  extraSelectors: ({
    selectSelectedId,
    selectEntities,
    selectScientistsState,
  }) => ({
    ...adapter.getSelectors(selectScientistsState),
    selectSelectedScientist: createSelector(
      selectSelectedId,
      selectEntities,
      (selectedId, scientists) => (selectedId ? scientists[selectedId] : null)
    ),
  }),
});
