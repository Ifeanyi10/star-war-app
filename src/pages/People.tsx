import React, { useEffect, useState } from 'react';

import Box from '@mui/material/Box';
import {Container, CssBaseline, Grid, Paper, Tabs, ThemeProvider, Toolbar } from '@mui/material';

import DrawerLayout from '../components/layouts/DrawerLayout';
import theme from '../components/models/Theme';
import FooterBox from '../components/widgets/FooterBox';
import PeopleCarousal from '../components/widgets/peopleComponents/PeopleCarousel';
import PersonList from '../components/widgets/peopleComponents/PersonCardList';
import Spinner from '../components/widgets/Spinner';




const drawerWidth: number = 240;
const drawerHeight: number = 600;
const outerHeight: string = '80%';
const componentHeight: string = '80%';

const PeoplePage: React.FC = () => {

  const API_URL = 'https://swapi.dev/api/people';

  const [value, setValue] = useState(0);
  const [people, setPeople] = useState<[]>([]);
  const [fetchError, setFetchError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchPeople = async () => {
      try {
        const response = await fetch(API_URL);
        if (!response.ok) throw Error('Did not receive expected data');
        const people = await response.json();
        console.log(people.results);
        setPeople(people.results);
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
        <DrawerLayout title="People" />

        {isLoading && <Spinner />}

        {!isLoading && (
          <Box
            component="main"
            sx={{
              flexGrow: 1,
              p: 1,
              width: { sm: `calc(100% - ${drawerWidth}px)` },
              maxHeight: { sm: `calc(100% - ${drawerHeight}px)` },
            }}
          >
            <Toolbar />
            <Container maxWidth="lg" sx={{ mt: 2, mb: 4 }}>
              <Grid container spacing={10}>
                
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
                    <PersonList people={people} />
                  </Paper>
                </Grid>
                
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

export default PeoplePage;