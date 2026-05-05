// the content for  main.ts file which is the entry point of the application. It bootstraps the AppComponent and applies the appConfig configuration.
import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));

