export interface User {
  id: number;
  firstName: string;
  email: string;
  gender: string;
  phone: string;
}

export interface UsersResponse {
  users: User[];
}
