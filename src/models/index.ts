export * from './functions';

type UUID = string;

export interface User {
  id: UUID;
  name: string;
  surname: string;
  photoUrl: string;
  email: string;
}

export interface Trip {
  id: UUID;
  startLocation: google.maps.LatLng;
  timeStart: Date;
}
