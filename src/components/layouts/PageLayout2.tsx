import React from 'react'
import Box from '@mui/material/Box';

import { Container, createTheme, CssBaseline, ThemeProvider } from '@mui/material';
import ButtonList from '../widgets/ButtonList';
import WelcomeText from '../widgets/WelcomeText';
import FooterBox from '../widgets/FooterBox';
import DrawerLayout from './DrawerLayout';


const drawerWidth: number = 240;
const theme = createTheme();

const AppBars: React.FC = () => {

  return (
    <ThemeProvider theme={theme}>
        <CssBaseline />
    <Box sx={{ display: "flex" }}>
      
      <DrawerLayout title='Star Wars Explorer'/>

      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 15,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Container maxWidth="sm">
          <WelcomeText />
          <ButtonList />
        </Container>

        {/* Footer */}
        <FooterBox />
        {/* End footer */}
      </Box>
    </Box>
    </ThemeProvider>
  );
}

export default AppBars