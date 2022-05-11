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
}

export interface Engineer extends User {
  employeeNumber: number;
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
}

export interface SensorRecord extends BaseModel {
  carId: UUID;
  tripId?: UUID;
  tripStage?: 'start' | 'end';
  fuelTankOccupancy: number;
  wheelsPressure: {
    frontLeft: number;
    frontRight: number;
    rearLeft: number;
    rearRight: number;
  };
}

export interface Trip extends BaseModel {
  userId: UUID;
  carId: UUID;
  start: {
    location: google.maps.LatLngLiteral;
    time: string;
  };
  end?: {
    location: google.maps.LatLngLiteral;
    time: string;
  };
  totalDistance: number;
  totalTime: number;
}

export interface TripMeasurement {
  time: string;
  location: google.maps.LatLngLiteral;
}

export interface TripBucket extends BaseModel {
  tripId: UUID;
  startTime: string;
  endTime: string;
  measurements: TripMeasurement[];
}
