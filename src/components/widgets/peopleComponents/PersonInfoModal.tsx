import { Box, Button, IconButton, Modal, Typography } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import React, { useState } from 'react'
import DataInfoField from '../DataInfoField';

export type Person = {
    person: string,
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

const DataInfoList: React.FC<Person> = ({person}) =>{

  const rootRef = React.useRef<HTMLDivElement>(null);
  const myPersonData = JSON.parse(person);

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
            {myPersonData["name"]}
          </Typography>
          <Box id="server-modal-description" sx={{ pt: 2 }}>
            <DataInfoField label="Height" value={myPersonData["height"]} />
            <DataInfoField label="Mass" value={myPersonData["mass"]} />
            <DataInfoField
              label="Hair Color"
              value={myPersonData["hair_color"]}
            />
            <DataInfoField
              label="Skin Color"
              value={myPersonData["skin_color"]}
            />
            <DataInfoField label="Gender" value={myPersonData["gender"]} />
            <DataInfoField
              label="Birth Year"
              value={myPersonData["birth_year"]}
            />
          </Box>
        </Box>
      </Modal>
    </Box>
  );
}

export default DataInfoList