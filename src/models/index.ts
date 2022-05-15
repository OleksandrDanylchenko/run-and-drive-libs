import { ReactNode } from 'react';

export * from './functions';

export type UUID = string;

interface BaseModel {
  id: UUID;
}

export interface User extends BaseModel {
  name: string;
  surname: string;
  email: string;
  phone: string;
  photoUrl: string;
  tripsIds: string[];
  createdAt: number;
}

export interface Engineer {
  employeeNumber: number;
  user: User;
}

export interface Emitter extends BaseModel {
  engineerId: UUID;
  activatedAt: string;
}

export interface Car extends BaseModel {
  emitterId: UUID;
  vin: string;
  brand: string;
  model: string;
  year: string;
  photosUrls: string[];
  color: string;
  mileage: number;
  engineCapacity: number;
  fuelCapacity: number;
  averageConsumption: number;
}

export interface SensorsRecord extends BaseModel {
  carId: UUID;
  tripId?: UUID;
  fuelTankOccupancy: number;
  location: google.maps.LatLngLiteral;
  wheelsPressure?: {
    frontLeft: number;
    frontRight: number;
    rearLeft: number;
    rearRight: number;
  };
  timestamp: string;
}

export interface Trip extends BaseModel {
  user: User;
  car: Car;
  start: {
    location: google.maps.LatLngLiteral;
    time: string;
  };
  end?: {
    location: google.maps.LatLngLiteral;
    time: string;
  };
  totalDistance: number;
}

export enum TripState {
  'IN_PROGRESS' = 'IN_PROGRESS',
  'ENDED' = 'ENDED',
}

export interface TableRowData {
  label: string;
  value: number | string | ReactNode | null;
  highlighted?: boolean;
}
