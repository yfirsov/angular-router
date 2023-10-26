import { Injectable } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { RouterStateSnapshot, Routes, TitleStrategy } from '@angular/router';
import { HeroListComponent } from './hero-list/hero-list.component';

export const appRoutes: Routes = [
  {
    path: 'crisis-center',
    title: 'Crisis Center',
    loadComponent: () =>
      import('./crisis-list/crisis-list.component').then(
        m => m.CrisisListComponent
      ),
  },
  { path: 'heroes', title: 'Heroes', component: HeroListComponent },
  {
    path: 'mods',
    title: 'Resolution modifiers',
    loadComponent: () =>
      import('./host-parent/host-parent.component').then(
        m => m.HostParentComponent
      ),
  },
  {
    path: 'lifecycle',
    title: 'Component Lifecycle',
    loadComponent: () =>
      import('./lifecycle/lifecycle.component').then(m => m.LifecycleComponent),
  },
  {
    path: 'billing-info',
    title: 'Billing Info',
    loadComponent: () =>
      import('./billing-info/billing-info.component').then(
        m => m.BillingInfoComponent
      ),
  },
  { path: 'heroes', component: HeroListComponent },
  { path: '', redirectTo: '/mods', pathMatch: 'full' },
  {
    path: '**',
    title: '404',
    loadComponent: () =>
      import('./page-not-found/page-not-found.component').then(
        m => m.PageNotFoundComponent
      ),
  },
];

@Injectable({ providedIn: 'root' })
export class TemplatePageTitleStrategy extends TitleStrategy {
  constructor(private readonly title: Title) {
    super();
  }

  override updateTitle(routerState: RouterStateSnapshot) {
    const title = this.buildTitle(routerState);
    if (title !== undefined) {
      this.title.setTitle(`My Application | ${title}`);
    }
  }
}
