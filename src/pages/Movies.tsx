import React, { useEffect, useState } from 'react'
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import FooterBox from '../components/widgets/FooterBox';
import ButtonList from '../components/widgets/ButtonList';
import AppBar from '../components/layouts/AppBar';
import WelcomeText from '../components/widgets/WelcomeText';
import { Toolbar, Grid, Paper } from '@mui/material';
import DrawerLayout from '../components/layouts/DrawerLayout';
import PeopleCarousal from '../components/widgets/PeopleCarousel';
import PersonList from '../components/widgets/PersonCardList';
import Spinner from '../components/widgets/Spinner';
import MovieCardList from '../components/widgets/MovieCardList';


const theme = createTheme();
const API_URL = 'https://swapi.dev/api/films';
const drawerWidth: number = 240;
const drawerHeight: number = 600;

const MoviesPage: React.FC = () =>{
  const [movies, setMovies] = useState<[]>([]);
  const [fetchError, setFetchError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchPeople = async () => {
      try {
        const response = await fetch(API_URL);
        if (!response.ok) throw Error('Did not receive expected data');
        const movies = await response.json();
        setMovies(movies.results);
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
        <DrawerLayout title="Movies" />

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
                    <MovieCardList movies={movies} />
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

export default MoviesPage