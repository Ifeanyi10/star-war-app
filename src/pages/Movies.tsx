import React from 'react'
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import FooterBox from '../components/widgets/FooterBox';
import ButtonList from '../components/widgets/ButtonList';
import AppBar from '../components/layouts/AppBar';
import WelcomeText from '../components/widgets/WelcomeText';


const theme = createTheme();

const MoviesPage = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar title='Movies' />
      <main>
        {/* Hero unit */}
        <Box
          sx={{
            bgcolor: 'background.paper',
            pt: 8,
            pb: 6,
          }}
        >
          <Container maxWidth="sm">
            <WelcomeText />
            <ButtonList />
          </Container>
        </Box>
        
      </main>
      {/* Footer */}
      <FooterBox />
      {/* End footer */}
    </ThemeProvider>
  )
}

export default MoviesPage