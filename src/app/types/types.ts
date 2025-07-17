export interface User {
  id: number;
  firstName: string;
  email: string;
  gender: string;
  phone: string;
}

export type LoadState<T> = T | 'loading' | 'error';
