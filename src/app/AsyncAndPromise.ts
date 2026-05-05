import { HttpClient, HttpErrorResponse, HttpResponse } from "@angular/common/http";
import { inject } from "@angular/core";
import { count, debounceTime, delay, fromEvent, interval, map, mergeMap, Observable, of, Subject, switchMap, timeout, timer } from "rxjs";

let backEnd :string = "http://localhost:5154/api";
async function displayAsync() {

  let myPromise = new Promise(function(resolve, reject) {
    setTimeout( () => {  
      resolve("I love You !!");
    }, 2000 );
  }); 
  
  document.getElementById("demoAsync")!.innerHTML = await myPromise as string;
}

function runThrowNetworkErrorRxJs( url: string ): Observable<any> {
 
  let httpClient = inject(HttpClient);

  return httpClient.get(url);
}

function runThrowHttpErrorRxJs(networkCode: number) {
  let httpClient = inject(HttpClient);

  return httpClient.get(`${backEnd}/Test/GetTestData?code=${networkCode}`);
}

async function runThrowNetworkErrorAsyn(  ) {
  return returnHttpError("Http://fakeUrlAsync"); 
}


async function runThrowHttpErrorAsync( networkCode: number ) {
  return returnHttpError(`${backEnd}/Test/GetTestData?code=${networkCode}`); 

  // switch (networkCode) {
  //   case 500:
  //     return return500HttpError();
  //   case 400:
  //     return return400HttpError();
  //   case 504:
  //     return return504HttpError();
  //   default:
  //     return new HttpResponse({ status: 200, statusText: "OK" });
  // }
}

async function runThrow500HttpErrorAsync() {
  return return500HttpError();
}

function returnHttpError(url: string ){
   return fetch(url);
    //new HttpErrorResponse({ status: 500, statusText: "500 Internal Server Error" }  );
}

function return500HttpError( ){
  return new HttpErrorResponse({ status: 500, statusText: "500 Internal Server Error" }  );
}

function return400HttpError(){
  return new HttpErrorResponse({ status: 400, statusText: "400 Bad Request" }  );
}

function return504HttpError(){
  return fetch("https://httpstat.us/504?sleep=5000");
}

async function loadData() {

  let response = await fetch("missing.json");

  if (!response.ok) {
    console.log("HTTP Error:", response.status);
    return;
  }

  let data = await response.json();
  console.log(data);
}

async function runMultiAsycn() {
  let p1 = step1(); // start and returns p1 promise
  let p2 = step2(); // start and returns p2 promise
  var res:number[] = [];//};
  let values = (await Promise.all([p1, p2]));

  values.forEach((value) => res = [...res, ...value ]); // wait for p2 to complete and get its result 
  console.log(res);
}

function step1() {
 return Promise.resolve([1,2,3,5]);}

function step2() {
 return Promise.resolve([6,7,8,9]);}

export { displayAsync, runMultiAsycn,runThrowHttpErrorRxJs,
  runThrowNetworkErrorAsyn, runThrowNetworkErrorRxJs,
    runThrowHttpErrorAsync}  



