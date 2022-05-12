import { SerializedError } from '@reduxjs/toolkit';
import { FetchBaseQueryError } from '@reduxjs/toolkit/query/react';

export const getErrorMessage = (
  error?: FetchBaseQueryError | SerializedError,
): string | undefined => {
  if (!error) return;
  if (!('status' in error)) return error.message;

  let message: string;
  if ('error' in error) {
    message = error.error;
  } else {
    message = (error.data as { message: string }).message;
  }
  return `${error.status} ${message}`;
};

export * from './middlewares';
