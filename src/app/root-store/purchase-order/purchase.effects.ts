import { Injectable } from "@angular/core";
import { Actions, ofType, Effect, createEffect } from "@ngrx/effects";
import { of } from "rxjs";
import { catchError, map, mergeMap } from "rxjs/operators";
import * as PurchaseActions from "./purchase.actions";

import { JobService } from "src/app/services/jobs.service";
import { JobSignUp } from "src/app/models/jobs.modal";

@Injectable()
export class PurchaseEffects {
  constructor(private jobsService: JobService, private action$: Actions) {}

  getJobs$ = createEffect(() =>
    this.action$.pipe(
      ofType(PurchaseActions.BeginGetJobsAction),
      mergeMap(() =>
        this.jobsService.getJobs().pipe(
          map((jobs: JobSignUp[]) => {
            return PurchaseActions.SuccessGetJobsAction({ payload: jobs });
          }),
          catchError(error => of(PurchaseActions.ErrorJobsAction(error)))
        )
      )
    )
  );
  //   GetToDos$: Observable<Action> = createEffect(() =>
  //    this.action$.pipe(ofType(PurchaseActions.GetJobsAction)),
  //         this.jobsService.getJobs().pipe(map((data:any) =>{
  //         })

  //     ),

  //   CreateToDos$: Observable<Action> = createEffect(() =>
  //     this.action$.pipe(
  //       ofType(ToDoActions.BeginCreateToDoAction),
  //       mergeMap(action =>
  //         this.todoService.createToDos(action.payload).pipe(
  //           map((data: ToDo) => {
  //             return ToDoActions.SuccessCreateToDoAction({ payload: data });
  //           }),
  //           catchError((error: Error) => {
  //             return of(ToDoActions.ErrorToDoAction(error));
  //           })
  //         )
  //       )
  //     )
  //   );
}
