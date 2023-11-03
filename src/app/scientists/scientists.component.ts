import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { Store } from '@ngrx/store';
import { Scientist } from './scientists.model';
import { ScientistsPageActions } from './state/scientists-page.actions';
import { scientistsFeature } from './state/scientists.reducer';

@Component({
  selector: 'app-scientists',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatProgressBarModule],
  templateUrl: './scientists.component.html',
  styleUrls: ['./scientists.component.scss'],
})
export class ScientistsComponent implements OnInit {
  store = inject(Store);

  scientists$ = this.store.select(scientistsFeature.selectAll);
  selectedScientist$ = this.store.select(
    scientistsFeature.selectSelectedScientist
  );
  isLoading$ = this.store.select(scientistsFeature.selectIsLoading);

  ngOnInit() {
    this.store.dispatch(ScientistsPageActions.load());
  }

  selectScientist(scientist: Scientist) {
    this.store.dispatch(ScientistsPageActions.select(scientist));
  }
}
