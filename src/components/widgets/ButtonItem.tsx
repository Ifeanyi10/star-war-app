import React from 'react'

import Button from '@mui/material/Button';

import {useNavigate} from 'react-router-dom';

import theme from '../models/Theme';

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
    <Button sx={{color: theme.palette.text.primary, borderBlockColor: theme.palette.text.primary, border: '1px #eb161e solid', '&:hover': {
      backgroundColor: theme.palette.text.primary,
      color: '#fff',
      border: '1px #eb161e solid',
  },}} variant="outlined" startIcon={startIcon} onClick={navigateHandler}>{buttonName}</Button>
  );
}

export default ButtonItem