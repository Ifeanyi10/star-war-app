import React from 'react'
import {createTheme, Theme} from '@mui/material/styles';

const theme = createTheme({
  palette: {
    background: {
      paper: "#fff",
    },
    text: {
      primary: "#eb161e",
      secondary: "#46505A",
    },
    action: {
      active: "#001E3C",
    },
    primary: {
      main: "#2B37D4", //indigo
    },
    secondary: {
      main: "#E769A6", //pink
    },
    error: {
      main: "#D72A2A", //red
    },
    warning: {
      main: "#FC7B09", //orange
    },
    info: {
      main: "#6B7D6A", //gray
    },
    success: {
      main: "#09FE00", //green
    },
  },
  spacing: 4,
  
});

export default theme;