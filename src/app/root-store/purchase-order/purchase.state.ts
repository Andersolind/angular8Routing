import { IJobSignUp } from "src/app/models/dashboard.modal";

export default class JobsState {
  Jobs: Array<IJobSignUp>;
  JobErrors: Error;
}

export const initializeState = (): JobsState => {
  return { Jobs: Array<IJobSignUp>(), JobErrors: null };
};
