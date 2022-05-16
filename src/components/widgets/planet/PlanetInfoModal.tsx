import { Box, IconButton, Modal, Typography } from '@mui/material';
import React, { useState } from 'react'
import CloseIcon from '@mui/icons-material/Close';
import DataInfoField from '../DataInfoField';

export type Planet = {
    planet: string,
}


const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #eb161e',
    boxShadow: 24,
    p: 4,
  };

const PlanetInfoModal: React.FC<Planet> = ({planet}) =>{

    const myPlanetData = JSON.parse(planet);
  const [open, setOpen] = useState<boolean>(true);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Box>
      <Modal
        keepMounted
        open={open}
        onClose={handleClose}
        aria-labelledby="keep-mounted-modal-title"
        aria-describedby="keep-mounted-modal-description"
      >
        <Box sx={style}>
          
        <IconButton sx={{float: 'right', color: '#eb161e'}}  aria-label="close" onClick={handleClose}>
         <CloseIcon />
      </IconButton>

          <Typography id="server-modal-title" variant="h4" component="h4">
            {myPlanetData["name"]}
          </Typography>
          <Box id="server-modal-description" sx={{ pt: 2 }}>
            <DataInfoField label="Terrain" value={myPlanetData["terrain"]} />
            <DataInfoField label="Population" value={myPlanetData["population"]} />
            
          </Box>
        </Box>
      </Modal>
    </Box>
  );
}

export default PlanetInfoModal