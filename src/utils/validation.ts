import * as yup from 'yup';

export const emailSchema = yup
  .string()
  .email('Invalid email format')
  .required('Email is required');

export const activationLoginSchema = yup
  .string()
  .length(8, 'Login should contain 8 characters')
  .required('Login is required');

export const carActivationCodeSchema = yup
  .string()
  .length(8, 'Car code should contain 8 characters')
  .required('Car code is required');

export const passwordSchema = yup
  .string()
  .min(8, 'Password should container at least 8 characters')
  .required('Password is required');
