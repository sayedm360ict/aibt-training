/* eslint-disable @typescript-eslint/no-explicit-any */
export interface IAdminList {
  id: number;
  name: string;
  email: string;
  phone: string;
  photo: string;
  status: number;
  created_at: string;
  role_id: number;
}

export interface IAdminParams {
  limit?: number;
  skip?: number;
  search?: string;
  status?: number;
  role_id?: number;
}
