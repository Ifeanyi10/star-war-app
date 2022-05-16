import React from 'react'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Copyright from './Copyright';

const FooterBox: React.FC = () => {
  return (
    <Box sx={{ p: 6 }} component="footer">
        <Typography variant="h6" align="center" gutterBottom>
          REDspace
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="text.secondary"
          component="p"
        >
          React Frontend Code Challenge
        </Typography>
        <Copyright />
      </Box>
  )
}

export default FooterBox