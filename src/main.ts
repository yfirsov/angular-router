import { importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';
import { AppComponent } from './app/app.component';
import { BrowserModule, bootstrapApplication } from '@angular/platform-browser';
import { appRoutes } from './app/routes';


bootstrapApplication(AppComponent, {
  providers: [ importProvidersFrom(BrowserModule), provideRouter(appRoutes) ]
})
  .catch(err => console.error(err));
