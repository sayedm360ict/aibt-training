/* eslint-disable @typescript-eslint/no-explicit-any */
export interface IUser {
  id: number;
  name: string;
  email: string;
  phone: string;
  photo: string;
  status: string;
  created_at: number;
  role_id: string;
}

export interface ILoginResponse<T> {
  success: boolean;
  data?: T;
  token?: string;
  message?: string;
  type?: string;
  status?: any
}

export interface IOTP {
  message: string;
  success: boolean;
  token: string;
}

export interface IUpdatePassword{
  old_password:string,
  new_password:string,
}