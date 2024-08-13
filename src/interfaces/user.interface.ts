export interface IUserData {
  name: string;
  email: string;
  password: string;
}

export type TUserLogin = Omit<IUserData, 'name'>;
