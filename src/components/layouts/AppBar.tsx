import React from 'react'
import AppBars from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';

interface Props{
    title: string;
}

const AppBar: React.FC <Props> = ({title}) => {
  return (
    <AppBars position="relative">
        <Toolbar>
          <MenuIcon sx={{ mr: 2 }} />
          <Typography variant="h6" color="inherit" noWrap>
            {title}
          </Typography>
        </Toolbar>
    </AppBars>
  )
}

export default AppBar