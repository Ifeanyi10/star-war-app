import * as React from 'react';
import { Box, TextField, Typography} from '@mui/material';

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
        <Typography id="transition-modal-description" variant="h4" component="h6" sx={{ mb: 1 }}>
        {dataInfo.value}
        </Typography>

        {/* <TextField
          id="outlined-read-only-input"
          label={dataInfo.label}
          defaultValue= {dataInfo.value}
          InputProps={{
            readOnly: true,
          }}
        /> */}

      </div>
    </Box>
  );
}

export default DataInfoField;
