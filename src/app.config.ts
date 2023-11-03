import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideRouter, TitleStrategy } from '@angular/router';
import { provideEffects } from '@ngrx/effects';
import { provideStore } from '@ngrx/store';
import { provideRouterStore } from '@ngrx/router-store';
import { metaReducers, reducers } from './app/reducers';
import { appRoutes, TemplatePageTitleStrategy } from './app/routes';
import * as scientistsEffects from './app/scientists/state/scientists.effects';

export const appConfig: ApplicationConfig = {
  providers: [
    importProvidersFrom(BrowserModule),
    provideRouter(appRoutes),
    { provide: TitleStrategy, useClass: TemplatePageTitleStrategy },
    provideStore(reducers, {
      metaReducers,
      runtimeChecks: {
        strictStateImmutability: true,
        strictActionImmutability: true,
        strictStateSerializability: true,
        strictActionSerializability: true,
        strictActionWithinNgZone: true,
        strictActionTypeUniqueness: true,
      },
    }),
    provideRouterStore(),
    provideAnimations(),
    provideEffects(scientistsEffects),
  ],
};
