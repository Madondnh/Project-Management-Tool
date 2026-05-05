import { Component } from '@angular/core';
import { scopedRoutes } from './scoped-rotes';
import { provideRouter, RouterLink, RouterOutlet, withHashLocation } from '@angular/router';

@Component({
  selector: 'app-route-testing',
  imports: [RouterLink],
  standalone: true, 
  templateUrl: './route-testing.component.html',
  styleUrl: './route-testing.component.css'
})

export class RouteTestingComponent {

}