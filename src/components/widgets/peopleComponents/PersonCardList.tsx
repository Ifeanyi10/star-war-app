import React from 'react'
import PersonCard from './PersonCard'
import './../../../App.css';

export type People = {
    people: [],
}

const PersonList: React.FC <People> = ({people}) => {
  return (
    <ul className='list'>
        {people.map((person, id) => (
            <PersonCard
                key={id}
                id={id}
                name={person['name']}
                height={person['height']}
                personData={person}
            />
        ))}
    </ul>
  );
}

export default PersonList