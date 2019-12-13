export class User {
  id?: string;
  email?: string;
  password?: string;
  token?: string;
}

export interface IRegistration {
  email?: string;
  password?: string;
}

export interface IJobSignUp {
  jobName?: string;
  address?: string;
  clientName?: string;
  notes?: string;
  phone?: string;
  jobNumber?: string;
}

export interface IMaterials {
  id?: string;
  supplierName: string;
  supplierAddress: string;
  materials: string;
  jobNumber?: string;
  driver?: string;
  poNumber?: string;
}
export interface IDriver {
  id?: number;
  name: string;
  phoneNumber: string;
}

export interface Materials {
  name: string;
  description: string;
  isExtra: boolean;
}
