/* eslint-disable @typescript-eslint/no-explicit-any */
export interface ITrainingList {
  total: number;
  id: number;
  title: string;
  description: string;
  image: null | string;
  start_time: string;
  end_time: string;
  status: string;
}

export interface ITrainingParams {
  limit?: number;
  skip?: number;
  status?: any;
  start_time?: any;
  end_time?: any;
}

export interface ITrainingDetails {
  id: number;
  title: string;
  description: string;
  image: string;
  start_time: string;
  end_time: string;
  status: string;
}

export interface ICreateTraining {
  title: string;
  description: string;
  image: string;
  start_time: string;
  end_time: string;
}
