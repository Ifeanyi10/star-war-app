import React from 'react'
import {createTheme, Theme} from '@mui/material/styles';

const Theme = createTheme({
    palette: {
      background: {
        paper: '#fff',
      },
      text: {
        primary: '#173A5E',
        secondary: '#46505A',
      },
      action: {
        active: '#001E3C',
      },
    },
  });

export default Theme;