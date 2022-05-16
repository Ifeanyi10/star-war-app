import React from 'react'
import { List, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import DashboardIcon from '@mui/icons-material/Dashboard';
import PeopleIcon from '@mui/icons-material/People';
import MovieIcon from '@mui/icons-material/Movie';
import LocationIcon from '@mui/icons-material/Place';
import { Link } from 'react-router-dom';

type Props = {
  open: boolean;
}

const MenuListItems: React.FC<Props> = ({open}) => {
  function setImageIcon (index: number){
    switch(index){
      case 0:
        return <DashboardIcon />
      case 1:
        return <PeopleIcon />
      case 2:
        return <MovieIcon />
      case 3:
        return <LocationIcon />
    }
  }

  function setNav (text: string): string{
    switch(text){
      case 'Dashboard':
        return '/';
      case 'People':
        return '/peoples';
      case 'Movies':
        return '/movies';
      case 'Planets':
        return '/planets';
    }
    return '/';
  }

  

  return (
    <List>
          {['Dashboard', 'People', 'Movies', 'Planets'].map((text, index) => (
            <ListItemButton
              key={text}
              component={Link}
              to={setNav(text)}
              sx={{
                minHeight: 48,
                justifyContent: open ? 'initial' : 'center',
                px: 2.5,
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : 'auto',
                  justifyContent: 'center',
                  color: '#eb161e'
                }}
              >
                {setImageIcon(index)}
              </ListItemIcon>
              <ListItemText primary={text} sx={{ opacity: open ? 1 : 0 }} />
            </ListItemButton>
          ))}
        </List>
  )
}

export default MenuListItems


