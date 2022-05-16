import React from 'react'
import Stack from '@mui/material/Stack';
import PeopleIcon from '@mui/icons-material/People';
import MovieIcon from '@mui/icons-material/Movie';
import LocationIcon from '@mui/icons-material/Place';

import ButtonItem from './ButtonItem';

const ButtonList = () => {
  return (
    <div>
        <Stack
            sx={{ pt: 4 }}
            direction="row"
            spacing={8}
            justifyContent="center"
        >
            <ButtonItem buttonName='People' startIcon={<PeopleIcon />} navigateRoute='/peoples'/>
            <ButtonItem buttonName='Movies' startIcon={<MovieIcon />} navigateRoute='/movies'/>
            <ButtonItem buttonName='Planets' startIcon={<LocationIcon />} navigateRoute='/planets'/>
        </Stack>
        
    </div>
  );
}

export default ButtonList