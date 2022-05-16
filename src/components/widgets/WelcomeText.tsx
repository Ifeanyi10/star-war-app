import React from 'react'
import Typography from '@mui/material/Typography';

const WelcomeText: React.FC = () => {
  return (
    <div>
        <Typography
            component="h2"
            variant="h2"
            align="center"
            color="text.primary"
            gutterBottom
        >
            Welcome To Star Wars Explorer 
        </Typography>
        <Typography variant="h5" align="center" color="text.secondary" paragraph>
            Explore collections about Star Wars films. Select any of the buttons
            below to start your exploration. Have Fun!
        </Typography>
    </div>
  )
}

export default WelcomeText