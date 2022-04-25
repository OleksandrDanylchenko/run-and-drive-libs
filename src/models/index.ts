export * from './functions';

type UUID = string;

export interface User {
  id: UUID;
  name: string;
  surname: string;
  photoUrl: string;
  email: string;
}
