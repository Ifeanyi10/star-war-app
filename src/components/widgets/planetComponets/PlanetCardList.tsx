import React from 'react'
import './../../../App.css';
import { PlanetCard } from './PlanetCard';

export type Planets = {
    planets: [],
}

const PlanetCardList: React.FC <Planets> = ({planets}) => {
  return (
    <ul className='list'>
        {planets.map((planet, id) => (
            <PlanetCard
                key={id}
                id={id}
                title={planet['name']}
                climate={planet['climate']}
                planetData={planet}
            />
        ))}
    </ul>
  );
}

export default PlanetCardList