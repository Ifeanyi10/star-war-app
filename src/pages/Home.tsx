import React from 'react';

import Box from '@mui/material/Box';
import { Container, CssBaseline, ThemeProvider } from '@mui/material';

import DrawerLayout from '../components/layouts/DrawerLayout';
import theme from '../components/models/Theme';
import ButtonList from '../components/widgets/ButtonList';
import FooterBox from '../components/widgets/FooterBox';
import WelcomeText from '../components/widgets/WelcomeText';



const drawerWidth: number = 240;

const HomePage: React.FC = () => {

  return (
    <ThemeProvider theme={theme}>
        <CssBaseline />
    <Box sx={{ display: "flex"}}>
      
      <DrawerLayout title='Star Wars Explorer'/>

      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 15,
          mt: 20,
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

export default HomePage