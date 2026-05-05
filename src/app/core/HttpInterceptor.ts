import { HttpErrorResponse } from "@angular/common/http";
import { inject } from "@angular/core";
import { RedirectCommand, Router } from "@angular/router";
import { catchError, mergeMap, retry, retryWhen, throwError, timer } from "rxjs";

const authInterceptor = (req: any, next: any) => {

    const router = inject(Router);

    console.log('HTTP Interceptor called with request:', req);

    const cloned = req.clone({ setHeaders: { Authorization: 'Bearer token' } });

    return next(cloned).pipe(
        //What to do when error occurs in the HTTP request, for example, log the error and rethrow it
        catchError((error: HttpErrorResponse) => {
            console.error('HTTP Interceptor caught error:', error);

            if (error.status === 401) {
                // Redirect to login page or show a message
                console.log('Unauthorized error, redirecting to login page.');
                // You can use Angular's Router to navigate to the login page
                router.navigate(['/login']);
            };
            
            return throwError(() => error);
        }),
        //retry 3 times on error
        retryWhen(errors => errors.pipe(
            // We count the attempts using the index
            mergeMap((error, index) => {
                const retryAttempt = index + 1;
                const maxAttempts = 3;

                // If we've tried 3 times, give up and throw the error
                if (retryAttempt > maxAttempts || error.status === 401) {
                    return throwError(() => error);
                }

                console.log(`Attempt ${retryAttempt}: Retrying in ${retryAttempt * 1000}ms...`);

                // This 'timer' tells retryWhen to trigger the retry after a delay
                return timer(retryAttempt * 1000);
            })
        )));
};

export { authInterceptor };