import React, { useEffect, useState } from 'react'
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import FooterBox from '../components/widgets/FooterBox';
import ButtonList from '../components/widgets/ButtonList';
import AppBar from '../components/layouts/AppBar';
import WelcomeText from '../components/widgets/WelcomeText';
import DrawerLayout from '../components/layouts/DrawerLayout';
import Spinner from '../components/widgets/Spinner';
import { Grid, Paper, Toolbar } from '@mui/material';
import PlanetCardList from '../components/widgets/planet/PlanetCardList';
import PeopleCarousal from '../components/widgets/PeopleCarousel';


const theme = createTheme();
const API_URL = 'https://swapi.dev/api/planets';
const drawerWidth: number = 240;
const drawerHeight: number = 600;

const PlanetsPage: React.FC = () =>{
  const [planets, setPlanets] = useState<[]>([]);
  const [fetchError, setFetchError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchPeople = async () => {
      try {
        const response = await fetch(API_URL);
        if (!response.ok) throw Error('Did not receive expected data');
        const planets = await response.json();
        console.log(planets.results);
        setPlanets(planets.results);
        setFetchError(null);
      } catch (err: any) {
        setFetchError(err.message);
      } finally {
        setIsLoading(false);
      }
    }

    (async () => await fetchPeople())();

  }, []);


  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ display: "flex" }}>
        <DrawerLayout title="Planets" />

        {isLoading && <Spinner />}

        {!isLoading && (
          <Box
            component="main"
            sx={{
              flexGrow: 1,
              p: 1,

              // minWidth: {outerHeight},
              // width: { sm: outerHeight },
              // maxHeight: { sm: outerHeight },
              width: { sm: `calc(100% - ${drawerWidth}px)` },
              maxHeight: { sm: `calc(100% - ${drawerHeight}px)` },
            }}
          >
            <Toolbar />
            <Container maxWidth="lg" sx={{ mt: 2, mb: 4 }}>
              <Grid container spacing={10}>
                {/* Chart */}
                <Grid item xs={12} md={6} lg={6}>
                  <Paper
                    sx={{
                      p: 2,
                      display: "flex",
                      flexDirection: "column",
                      maxHeight: drawerHeight,
                      minHeight: drawerHeight,
                      scrollBehavior: "smooth",
                      scrollbarWidth: "thin",
                      overflow: "auto",
                      overflowY: "auto",
                    }}
                  >
                    <PlanetCardList planets={planets} />
                  </Paper>
                </Grid>
                {/* Recent Deposits */}
                <Grid item xs={12} md={6} lg={6}>
                  <Paper
                    sx={{
                      p: 2,
                      display: "flex",
                      flexDirection: "column",
                      height: drawerHeight,
                    }}
                  >
                    <PeopleCarousal />
                  </Paper>
                </Grid>
              </Grid>
            </Container>

            {/* Footer */}
            <FooterBox />
            {/* End footer */}
          </Box>
        )}
      </Box>
    </ThemeProvider>
  );
}

export default PlanetsPage;