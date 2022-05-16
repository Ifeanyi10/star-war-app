import React from 'react';

import { Backdrop, CircularProgress } from '@mui/material';

import theme from '../models/Theme';

const Spinner: React.FC = () => {
  return (
    <Backdrop
        sx={{ color: theme.palette.text.primary, zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open = {true}>
        <CircularProgress color="inherit" />
      </Backdrop>
  )
}

export default Spinner;