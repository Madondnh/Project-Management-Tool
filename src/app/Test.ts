import { inject } from "@angular/core";
import { Router } from "@angular/router";
import { count, debounceTime, fromEvent, interval, map, mergeMap, Observable, of, Subject, switchMap } from "rxjs";

var globalMessanger$ : Subject<any> = new Subject<any>(); 

var globalMessanger2$ : any = () : Observable<any> => { return new Observable(); } 

function Test(): void {
  
   var count = 0;
   
    while(count < 5) {
        count++;

        setTimeout(() => {
            globalMessanger$.next("Hello from Observable!");
            //observer.complete();
        }, 2000);
    }
}

function Test2() : Observable<any>{
    return new Observable(observer => {
        setTimeout(() => {
            observer.next("Hello from Observable!");
            observer.complete();
        }, 2000);   
})
}

/*Each Observable must define how to dispose resources of that execution when we create the Observable using create().
 You can do that by returning a custom unsubscribe function from within function subscribe()
*/
 
const observable = new Observable(function subscribe(subscriber) {
  // Keep track of the interval resource
  const intervalId = setInterval(() => {
    subscriber.next('hi');
  }, 1000);
 
  // Provide a way of canceling and disposing the interval resource
  return function unsubscribe() {
    clearInterval(intervalId);
  };
});

// Generate new Observable according to source Observable values
const switched = of(1, 2, 3).pipe(switchMap(x => of(x, x ** 2, x ** 3)));
switched.subscribe(x => console.log(x));
// outputs
// 1
// 1
// 1
// 2
// 4
// 8
// 3
// 9
// 27

//Restart an interval Observable on every click event
const clicks1 = fromEvent(document, 'click');
//Creates an Observable that emits sequential numbers every specified interval of time, on a specified SchedulerLike.
//Emits incremental numbers periodically in time.
const result1 = clicks1.pipe(switchMap(() => interval(1000))); //
result1.subscribe(x => console.log(x));

//Emits a notification from the source Observable only after a particular time span has passed without another source emission.
// e.g Emit the most recent click after a burst of clicks
const clicks2 = fromEvent(document, 'click');
const result = clicks2.pipe(debounceTime(1000));
result.subscribe(x => console.log(x));

//Projects each source value to an Observable which is merged in the output Observable. 
const letters = of('a', 'b', 'c');
const result2= letters.pipe(
  mergeMap(x => interval(1000).pipe(map(i => x + i)))
);
 
result.subscribe(x => console.log(x));
 
// Results in the following:
// a0
// b0
// c0
// a1
// b1
// c1
// continues to list a, b, c every second with respective ascending integers

// ***  Working with Promise 
let myPromise = new Promise(function(resolve, reject) {

// Code that may take some time
 let value = 1 + 1; // example of some code that may take time  
  resolve(value); // when successful
  reject(value);  // when error
});

// using the above promise
myPromise.then(
  function(value) { /* code if success */ },
  function(value) { /* code if error */ }
);

let loggedIn = false;

export const authGuard = () => {
  
  if (loggedIn) return true;
  const router = inject(Router);
  return router.createUrlTree(['']);
};

export { Test, Test2, globalMessanger$ };