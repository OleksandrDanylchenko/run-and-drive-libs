import { FC } from 'react';

import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import { SerializedError } from '@reduxjs/toolkit';
import { FetchBaseQueryError } from '@reduxjs/toolkit/dist/query/react';

import { getErrorMessage } from '@redux/index';

interface Props {
  title: string;
  error: SerializedError | FetchBaseQueryError | undefined;
}

const FetchErrorAlert: FC<Props> = ({ title, error }) => (
  <Alert severity="error">
    <AlertTitle>{title}</AlertTitle>
    {getErrorMessage(error)}
  </Alert>
);

export default FetchErrorAlert;
