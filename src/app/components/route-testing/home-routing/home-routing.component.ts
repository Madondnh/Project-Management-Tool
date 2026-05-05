import { Component, inject } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive, provideRouter, withHashLocation, Router } from '@angular/router'; 
import { routes } from '../../../app.routes';
import { AppComponent } from '../../../app.component';

@Component({
  selector: 'app-home-routing',
  imports: [RouterOutlet, RouterLink,RouterLinkActive],
  templateUrl: './home-routing.component.html',
  styleUrl: './home-routing.component.css'
})

// let isLoggedIn = false;
// export const authGuard = () => isLoggedIn ? true : inject(Router).createUrlTree(['/']);

export class HomeRoutingComponent {

}