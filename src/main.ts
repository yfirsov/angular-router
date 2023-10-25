import { importProvidersFrom } from '@angular/core';
import { provideRouter, TitleStrategy } from '@angular/router';
import { AppComponent } from './app/app.component';
import { BrowserModule, bootstrapApplication } from '@angular/platform-browser';
import { appRoutes, TemplatePageTitleStrategy } from './app/routes';

bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom(BrowserModule),
    provideRouter(appRoutes),
    { provide: TitleStrategy, useClass: TemplatePageTitleStrategy },
  ],
}).catch(err => console.error(err));
