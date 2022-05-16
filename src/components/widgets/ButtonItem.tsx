import React from 'react'
import Button from '@mui/material/Button';

import {useNavigate} from 'react-router-dom';
import { ListItemIconProps } from '@mui/material/ListItemIcon';

type Props = {
    buttonName: string;
    navigateRoute: string;
    startIcon: React.ReactNode;
};

const ButtonItem: React.FC<Props> = ({buttonName, startIcon, navigateRoute}) => {
  const navigate = useNavigate();

  const navigateHandler = () =>{
    navigate(navigateRoute);
  };
  return (
    <Button sx={{color: '#eb161e', borderBlockColor: '#eb161e', border: '1px #eb161e solid', '&:hover': {
      backgroundColor: '#eb161e',
      color: '#fff',
      border: '1px #eb161e solid',
  },}} variant="outlined" startIcon={startIcon} onClick={navigateHandler}>{buttonName}</Button>
  );
}

export default ButtonItem