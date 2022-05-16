import React from 'react';

import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

import theme from '../models/Theme';

const Copyright: React.FC = () => {
    return (
        <Typography variant="body2" color="text.secondary" align="center">
          {'Copyright © '}
          <Link sx={{color: theme.palette.text.primary, textDecorationColor: theme.palette.text.primary}} href="https://www.redspace.com/">
            REDspace
          </Link>{' '}
          {new Date().getFullYear()}
          {'.'}
        </Typography>
      );
}

export default Copyright;