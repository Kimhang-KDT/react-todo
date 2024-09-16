export interface User {
  _id: string;
  username: string;
  email: string;
  createdAt: Date;
}

export interface UserWithPassword extends User {
  password: string;
}