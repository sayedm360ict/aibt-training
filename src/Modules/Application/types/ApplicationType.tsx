/* eslint-disable @typescript-eslint/no-explicit-any */
export interface IApplicationList {
  id: number;
  user_name: string;
  training_name: string;
  status: string;
  applied_at: string;
}

export interface IApplicationParams {
  limit?: number;
  skip?: number;
  status?: any;
  search?: any;
  applied_at?: any;
  training_name?: string;
}

export interface IApplicationDetails {
  id: number;
  name: string;
  email: string;
  phone: string;
  photo: string;
  address: string;
  title: string;
  description: string;
  image: string;
  start_time: string;
  end_time: string;
  applied_at: string;
  status: string;
}
