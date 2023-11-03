import { inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { ScientistsService } from '../scientists.service';
import { ScientistsPageActions } from './scientists-page.actions';
import { ScientistsActionsAPI } from './scientists.actions';

export const loadScientists = createEffect(
  (
    actions$ = inject(Actions),
    scientistsService = inject(ScientistsService)
  ) => {
    return actions$.pipe(
      ofType(ScientistsPageActions.load),
      switchMap(() =>
        scientistsService.scientists$.pipe(
          map(scientists =>
            ScientistsActionsAPI.scientistsLoadedSuccess({ scientists })
          ),
          catchError(error =>
            of(ScientistsActionsAPI.scientistsLoadedFailure({ error }))
          )
        )
      )
    );
  },
  {
    functional: true,
  }
);
