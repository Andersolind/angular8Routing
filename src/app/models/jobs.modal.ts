import { HttpHeaders } from "@angular/common/http";

export interface IJobSignUp {
  jobName: string;
  address: string;
  clientName: string;
  notes: string;
  phone: string;
  jobNumber: string;
}

export class HttpRes {
  body?: any;
  headers?: HttpHeaders;
  status?: number;
  statusText?: string;
  url?: string;
}
export class CommonResponse {
  httpRes: HttpRes;
  jobSignup: JobSignUp[];
}

export class JobSignUp {
  jobName: string;
  address: string;
  clientName: string;
  notes: string;
  phone: string;
  jobNumber: string;
}
