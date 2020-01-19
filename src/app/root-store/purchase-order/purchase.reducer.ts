import { Action, createReducer, on } from "@ngrx/store";

import * as PurchaseActions from "./purchase.actions";

import JobsState, { initializeState } from "./purchase.state";
import { JobSignUp } from "src/app/models/jobs.modal";

export const intialState = initializeState();

const reducer = createReducer(
  intialState,
  on(PurchaseActions.GetJobsAction, state => state),
  on(PurchaseActions.CreateJobsAction, (state: JobsState, jobs: JobSignUp) => {
    return { ...state, Jobs: [...state.Jobs, jobs], JobErrors: null };
  }),
  on(PurchaseActions.SuccessGetJobsAction, (state: JobsState, { payload }) => {
    return { ...state, Jobs: payload };
  }),
  on(
    PurchaseActions.SuccessCreateJobAction,
    (state: JobsState, { payload }) => {
      return { ...state, Jobs: [...state.Jobs, payload], ToDoError: null };
    }
  ),
  on(PurchaseActions.ErrorJobsAction, (state: JobsState, error: Error) => {
    console.log(error);
    return { ...state, JobErrors: error };
  })
);

export function PurchaceReducer(state: JobsState | undefined, action: Action) {
  return reducer(state, action);
}
