import { inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { ScientistsService } from '../scientists.service';
import { scientistsPageActions } from './scientists-page.actions';
import { scientistsActionsAPI } from './scientists.actions';

export const loadScientists = createEffect(
  (
    actions$ = inject(Actions),
    scientistsService = inject(ScientistsService)
  ) => {
    return actions$.pipe(
      ofType(scientistsPageActions.load),
      switchMap(() =>
        scientistsService.scientists$.pipe(
          map(scientists =>
            scientistsActionsAPI.loadScientistsSuccess({ scientists })
          ),
          catchError(error =>
            of(scientistsActionsAPI.loadScientistsFailure({ error }))
          )
        )
      )
    );
  },
  {
    functional: true,
  }
);
