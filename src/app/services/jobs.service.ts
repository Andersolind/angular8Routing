import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders, HttpResponse } from "@angular/common/http";
import { Observable, of } from "rxjs";
import { catchError, tap } from "rxjs/operators";
import { JobSignUp } from "../models/jobs.modal";
import { environment } from "src/environments/environment";

const httpOptions = {
  headers: new HttpHeaders({ "Content-Type": "application/json" })
};

@Injectable({ providedIn: "root" })
export class JobService {
  private baseUrl = environment.backendUrl;
  constructor(private http: HttpClient) {}

  /**
   * Get Jobs list
   */
  getJobs(): Observable<any> {
    let getJobsUrl = "/jobs";

    return this.http.get<JobSignUp[]>(`${this.baseUrl}${getJobsUrl}`).pipe(
      tap(res => {
        return res;
      }),
      catchError(this.handleError("getCustomers", []))
    );
  }

  /**
   * Get customers list
   */
  addJobs(jobSignUp: JobSignUp): Observable<any> {
    let addJobsUrl = "addJobs";
    return this.http
      .post<JobSignUp>(`${this.baseUrl}${addJobsUrl}`, jobSignUp, httpOptions)
      .pipe(
        tap(res => {
          return res;
        }),
        catchError(this.handleError("getCustomers", []))
      );
  }

  //  https://blog.imaginea.com/ngrx-introduction-and-its-basic-setup-with-angular/
  /**
   * deleteCustomer
   */
  // deleteCustomer(customer: Customer | number): Observable<Customer> {
  //   const id = typeof customer == 'number' ? customer : customer.id;
  //   const url = `${this.baseUrl}/${id}`;
  //   return this.http.delete<Customer>(url, httpOptions)
  //     .pipe(
  //       tap(customer => console.log(`deleted customer id=${id}`)),
  //       catchError(this.handleError<Customer>('deleteCustomer'))
  //     );
  // }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = "operation", result?: T) {
    return (error: any): Observable<T> => {
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
