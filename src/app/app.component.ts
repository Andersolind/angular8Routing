import { Component, ViewChild, OnInit } from "@angular/core";
import { MatMenuTrigger } from "@angular/material";
import { JobSignUp, IJobSignUp } from "./models/jobs.modal";
import { Store, select } from "@ngrx/store";
import JobsState from "./root-store/purchase-order/purchase.state";
import { Observable, Subscription } from "rxjs";
import { map } from "rxjs/operators";
import * as PurchaseActions from "./root-store/purchase-order/purchase.actions";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent implements OnInit {
  title = "HRSApp";
  jobs$: Observable<JobsState>;
  jobList: Array<IJobSignUp>;
  JobsSubscription: Subscription;

  constructor(private store: Store<{ jobs: JobsState }>) {
    //Note this has to be the same name as the name in the constructor
    this.jobs$ = store.select("jobs");
  }

  ngOnInit() {
    this.JobsSubscription = this.jobs$
      .pipe(
        map(x => {
          this.jobList = x.Jobs;
          //  this.todoError = x.ToDoError;
        })
      )
      .subscribe();

    this.store.dispatch(PurchaseActions.BeginGetJobsAction());
  }
}
