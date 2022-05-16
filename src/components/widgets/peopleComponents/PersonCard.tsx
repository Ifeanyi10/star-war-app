import React, { useState } from 'react'
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
// import CardMedia from '@mui/material/CardMedia';
// import CardContent from '@mui/material/CardContent';
// import CardActions from '@mui/material/CardActions';
// import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import { blue } from '@mui/material/colors';
import OpenIcon from '@mui/icons-material/OpenInNew';
import PersonInfoModal from './PersonInfoModal';

// interface ExpandMoreProps extends IconButtonProps {
//   expand: boolean;
// }

type PersonInfo = {
  id: number;
  name: string,
  height: string,
  personData: {},
}; 


const PersonCard: React.FC <PersonInfo> = (personInfo) => {
  // const [expanded, setExpanded] = React.useState(false);

  // const handleExpandClick = () => {
  //   setExpanded(!expanded);
  // };

  // const [state, setState] = useState({
  //   raised:false,
  //   shadow:1,
  // })

  // const Cards = styled(Card)(() => ({
  //   width: "100%",
  //   minHeight: "80",
  //   margin: 0,
    
  //   "&:hover": {
  //     onmouseover: setState({ raised: true, shadow:3}),
  //     onMouseOut: setState({ raised:false, shadow:1 }), 
  //     raised: {state},
  //     zdepth: {state},
  //   },
  // }));

  const [btnIsClick, setBtnIsClick] = useState<boolean>(false);
  // const [detailIsSet, setDetailIsSet] = useState<boolean>(false);
  const [personDetails, setPersonDetails] = useState<string>('');

  const buttonHandler = (id: number, pData: {}) => {
    setPersonDetails(JSON.stringify(pData));
    // {btnIsClick ? setBtnIsClick(!btnIsClick) : setBtnIsClick(!btnIsClick)};
    
    setBtnIsClick(!btnIsClick);
    console.log('Clicked ID:'+ id)
    // console.log('Clicked ID:'+ JSON.stringify(pData))
  };

  // if(btnIsClick){
  //   console.log('Flag one is:'+ btnIsClick)
  //   setBtnIsClick(false);
    
  // }else{
  //   console.log('Flag three is:'+ btnIsClick)
  //   setBtnIsClick(true);
    
  // }
  
  // console.log('Flag two is:'+ btnIsClick)
  //console.log('Flag four is:'+ btnIsClick)

  return (
    <div>
      <Card sx={{m: 1, minHeight: 80,}}>
            <CardHeader
              avatar={
                <Avatar sx={{ bgcolor: '#eb161e' }} aria-label="recipe">
                  {personInfo.name.charAt(0).toLocaleUpperCase()}
                </Avatar>
              }
              action={
                <IconButton sx={{color: '#eb161e'}} aria-label="open-modal" onClick={() => buttonHandler(personInfo.id, personInfo.personData) }>
                  <OpenIcon />
                </IconButton>
              }
              title={personInfo.name}
              subheader={`Height: ${personInfo.height}`}
            />
          </Card>
          {btnIsClick && <PersonInfoModal person={personDetails}/>}
    </div>
    
  );
}

export default PersonCard;