import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { Scientist } from '../scientists.model';

export const ScientistsPageActions = createActionGroup({
  source: 'Scientists Page',
  events: {
    load: emptyProps(),
    select: props<Scientist>(),
  },
});
