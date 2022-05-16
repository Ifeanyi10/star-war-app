import React from 'react'
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

const Copyright: React.FC = () => {
    return (
        <Typography variant="body2" color="text.secondary" align="center">
          {'Copyright © '}
          <Link sx={{color: '#eb161e', textDecorationColor: '#eb161e'}} href="https://www.redspace.com/">
            REDspace
          </Link>{' '}
          {new Date().getFullYear()}
          {'.'}
        </Typography>
      );
}

export default Copyright;