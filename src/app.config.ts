import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { provideRouter, TitleStrategy } from '@angular/router';
import { provideEffects } from '@ngrx/effects';
import { provideStore } from '@ngrx/store';
import { metaReducers, reducers } from './app/reducers';
import { appRoutes, TemplatePageTitleStrategy } from './app/routes';
import { provideAnimations } from '@angular/platform-browser/animations';
import * as scientistsEffects from './app/scientists/state/scientists.effects';

export const appConfig: ApplicationConfig = {
  providers: [
    importProvidersFrom(BrowserModule),
    provideRouter(appRoutes),
    { provide: TitleStrategy, useClass: TemplatePageTitleStrategy },
    provideStore(reducers, { metaReducers }),
    provideAnimations(),
    provideEffects(scientistsEffects),
  ],
};
