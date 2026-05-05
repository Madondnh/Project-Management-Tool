
//## Sample Scoped Routes for Route Testing Component   
import { provideRouter, withHashLocation, RouterOutlet, RouterLink } from '@angular/router';
import { RouteTestingComponent } from './route-testing.component';
import { AppComponent } from '../../app.component';

const routes = [
  { path: '', component: RouteTestingComponent },
  { path: 'about', component: RouteTestingComponent }
];

export const scopedRoutes = routes;