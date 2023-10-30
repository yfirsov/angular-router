import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { Store } from '@ngrx/store';
import { Scientist } from './scientists.model';
import { scientistsPageActions } from './state/scientists-page.actions';
import {
  selectIsLoading,
  selectScientists,
  selectSelectedScientist,
} from './state/scientists.reducer';

@Component({
  selector: 'app-scientists',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatProgressBarModule],
  templateUrl: './scientists.component.html',
  styleUrls: ['./scientists.component.scss'],
})
export class ScientistsComponent implements OnInit {
  store = inject(Store);

  scientists$ = this.store.select(selectScientists);
  selectedScientist$ = this.store.select(selectSelectedScientist);
  isLoading$ = this.store.select(selectIsLoading);

  ngOnInit() {
    this.store.dispatch(scientistsPageActions.load());
  }

  selectScientist(scientist: Scientist) {
    this.store.dispatch(scientistsPageActions.select(scientist));
  }
}
