import { Routes } from '@angular/router';
import { authGuard } from './Test';

export const routes: Routes = [
  { path: '', loadComponent: () => import('./components/page2/page2.component').then(m => m.Page2Component) },// Default route to load Page2Component when the path is empty  
  { path: 'subroutes', loadComponent: () => import('./components/route-testing/route-testing.component').then(m => m.RouteTestingComponent)},
  // { path: 'subroutes', loadComponent: () => import('./components/route-testing/route-testing.component').then(m => m.RouteTestingComponent), canActivate: [authGuard] },
  { path: 'page1', loadComponent: () => import('./components/page1/page1.component').then(m => m.Page1Component) },
  { path: 'page2', loadComponent: () => import('./components/page2/page2.component').then(m => m.Page2Component) },
  { path: '**', redirectTo: 'page2' } // Wildcard route to catch undefined paths and redirect to page2  
];

export class AppRoutingModule { }