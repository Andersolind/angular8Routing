import { Action, props, createAction } from "@ngrx/store";
import { JobSignUp } from "src/app/models/jobs.modal";

export const GetJobsAction = createAction("[Jobs] - Get Jobs");

export const CreateJobsAction = createAction(
  "[Purchase] - Create Jobs",
  props<JobSignUp>()
);

export const BeginGetJobsAction = createAction("[ToDo] - Begin Get ToDo");

export const SuccessGetJobsAction = createAction(
  "[Purchase] - Success Get Jobs",
  props<{ payload: JobSignUp[] }>()
);

export const BeginCreateToDoAction = createAction(
  "[Purchase] - Begin Create Jobs",
  props<{ payload: JobSignUp[] }>()
);

export const SuccessCreateJobAction = createAction(
  "[Purchase] - Success Create Jobs",
  props<{ payload: JobSignUp }>()
);

export const ErrorJobsAction = createAction(
  "[Purchase] - Error",
  props<Error>()
);
