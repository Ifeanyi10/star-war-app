import React, { useState } from 'react';

import { Avatar, Card, CardHeader, IconButton } from '@mui/material';
import OpenIcon from '@mui/icons-material/OpenInNew';

import PlanetInfoModal from './PlanetInfoModal';
import theme from '../../models/Theme';

type PlanetInfo = {
    id: number;
    title: string,
    climate: string,
    planetData: {},
}; 

export const PlanetCard: React.FC <PlanetInfo> = (planetInfo) => {

    const [btnIsClick, setBtnIsClick] = useState<boolean>(false);
    const [planetDetails, setPlanetDetails] = useState<string>('');

  const buttonHandler = (id: number, pData: {}) => {
    setPlanetDetails(JSON.stringify(pData));
    setBtnIsClick(!btnIsClick);
  };
  
  return (
    <div>
        <Card sx={{m: 1, minHeight: 80,}}>
            <CardHeader
              avatar={
                <Avatar sx={{ bgcolor: theme.palette.text.primary }} aria-label="recipe">
                  {planetInfo.title.charAt(0).toLocaleUpperCase()}
                </Avatar>
              }
              action={
                <IconButton sx={{color: theme.palette.text.primary}} aria-label="open-modal" onClick={() => buttonHandler(planetInfo.id, planetInfo.planetData)}>
                  <OpenIcon />
                </IconButton>
              }
              title={planetInfo.title}
              subheader={`Climate: ${planetInfo.climate}`}
            />
          </Card>
          {btnIsClick && <PlanetInfoModal planet={planetDetails}/>}
    </div>
  );
}
