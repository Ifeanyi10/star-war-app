import React, { Component } from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";


import './App.css';
import HomePage from './pages/Home';
import MoviesPage from './pages/Movies';
import PeoplePage from './pages/People';
import PlanetsPage from './pages/Planets';

class App extends Component {

  render(): JSX.Element{
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/peoples" element={<PeoplePage />} />
          <Route path="/movies" element={<MoviesPage />} />
          <Route path="/planets" element={<PlanetsPage />} />
        </Routes>
      </BrowserRouter>
        
    );
  }
}

export default App;
