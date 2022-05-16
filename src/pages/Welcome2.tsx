import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import { createTheme, ThemeProvider } from '@mui/material/styles';



const theme = createTheme();

export default function WelcomePage() {
  return (
    <ThemeProvider theme={theme}>
      
      <CssBaseline />
      {/* <AppBars title='Star Wars Explorer' /> */}
      
      
    </ThemeProvider>
  );
}