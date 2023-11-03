import { createActionGroup, props } from '@ngrx/store';
import { Scientist } from '../scientists.model';

export const ScientistsActionsAPI = createActionGroup({
  source: 'Scientists API',
  events: {
    scientistsLoadedSuccess: props<{ scientists: Scientist[] }>(),
    scientistsLoadedFailure: props<{ error: string }>(),
  },
});
