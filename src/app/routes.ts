import { Routes } from '@angular/router';
import { HeroListComponent } from './hero-list/hero-list.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';


export const appRoutes: Routes = [
  {
    path: 'crisis-center',
    loadComponent: () => import('./crisis-list/crisis-list.component').then(m => m.CrisisListComponent)
  },
  { path: 'heroes', component: HeroListComponent },
  { path: '', redirectTo: '/heroes', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];
