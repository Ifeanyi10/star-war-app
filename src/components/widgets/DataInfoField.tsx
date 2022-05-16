import * as React from 'react';

import { Box, Typography} from '@mui/material';

import theme from '../models/Theme';

interface Props{
  label: string;
  value: string;
};

const DataInfoField: React.FC <Props> = (dataInfo) => {
  

  return (
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '100%', marginLeft: 0 },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
      <Typography id="transition-modal-title"variant="h6" component="h6" sx={{ mt: 1 , mb:-1}}>
      {dataInfo.label}:
        </Typography>
        <Typography id="transition-modal-description" variant="h5" component="h5" sx={{ mb: 1, color: theme.palette.text.secondary}}>
        {dataInfo.value === 'n/a' ? 'Not Provided': dataInfo.value}
        </Typography>

      </div>
    </Box>
  );
}

export default DataInfoField;
