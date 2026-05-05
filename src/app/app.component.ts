import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Test, Test2, globalMessanger$ } from './Test';
import { map, Observable, scan, Subject, takeUntil } from 'rxjs';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import {runThrowNetworkErrorRxJs, displayAsync, runMultiAsycn,
runThrowHttpErrorRxJs, runThrowHttpErrorAsync, runThrowNetworkErrorAsyn } from './AsyncAndPromise'; 
import { HomeRoutingComponent } from './components/route-testing/home-routing/home-routing.component';
import { Page1Component } from './components/page1/page1.component';
import { TemplateFormExampleComponent } from "./components/template-form-example/template-form-example.component";
@Component({
  selector: 'app-root',
  imports: [HomeRoutingComponent, TemplateFormExampleComponent, Page1Component, TemplateFormExampleComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent implements OnInit, OnDestroy {

  testMyVar: string = "Hello from AppComponent!";

  constructor(private router: Router) {

    // runThrowNetworkErrorRxJs("Http://fakeUrlRxJs").subscribe({
    //   next: (response) => console.log(`The Throw Network Error  response status is ${response}`),
    //   error: (error) => console.error(`An error occurred: ${error}`) }
    // );

    runThrowHttpErrorRxJs(400).
    subscribe(
      {
      next : (response)  => console.log(`The response status is ${response}`), 
      error : (error)  => console.error(`An error occurred: ${error}`)
      }
    );


    // runThrowNetworkErrorAsyn().
    //   then(
    //     (response) => console.log(`The Throw Network Error  response status is ${response}`),
    //     (error) => console.error(`An error occurred: ${error}`)
    //   );  

  //   runThrowHttpErrorAsync(400).
  //   then(
  //     (response) => console.log(`The response status is ${response}`), 
  //     (error) => console.error(`An error occurred: ${error}`)
  //   );

  //  runThrowHttpErrorAsync(404).
  //   then(
  //     (response) => console.log(`The response status is ${response}`), 
  //     (error) => console.error(`An error occurred: ${error}`)
  //   );

  //   runThrowHttpErrorAsync(500).
  //   then(
  //     (response) => console.log(`The response status is ${response}`), 
  //     (error) => console.error(`An error occurred: ${error}`)
  //   );

  //   runThrowHttpErrorAsync(504).
  //   then(
  //     (response) => console.log(`The response status is ${response}`), 
  //     (error) => console.error(`An error occurred: ${error}`)
  //   );

    // runMultiAsycn();
    
    // globalMessanger$.pipe(
    //   (eve) => { return eve = new Observable(observer => observer.complete()) },
    //   scan((count) => count + 1, 0)).subscribe({
    //     next: (count) => console.log(`The first value of count is ${count} Observable completed!`),
    //     complete: () => console.log("Main Page Observable1 completed!")
    //   });

    // globalMessanger$.pipe(scan((count) => count + 1, 0)).subscribe({
    //   next: (count) => console.log(`The other value of count is ${count} Observable completed!`),
    //   complete: () => console.log("Main Page Observable2 completed!")
    // });

    // Test();

    // Test2().subscribe({
    //   next: (value) => console.log(`The value from Test2 is ${value} Observable completed!`),
    //   complete: () => { console.log("Observable3 completed!"); this.onEdit(0); }
    // });

  }
  ngOnDestroy(): void {
    console.log('AppComponent destroyed !');
  }

  ngOnInit(): void {
    console.log('AppComponent initialized !');
  }

  onEdit(id: number): void {

    globalMessanger$.unsubscribe();
    this.router.navigate(['/product/new']);
  }

}
