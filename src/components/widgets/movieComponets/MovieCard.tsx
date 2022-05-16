import { Avatar, Card, CardHeader, IconButton } from '@mui/material';
import React, { useState } from 'react'
import OpenIcon from '@mui/icons-material/OpenInNew';
import MovieInfoModal from './MovieInfoModal';
import theme from '../../models/Theme';

type MovieInfo = {
    id: number;
    title: string,
    episode: string,
    movieData: {},
}; 

const MovieCard: React.FC <MovieInfo> = (movieInfo) => {

    const [btnIsClick, setBtnIsClick] = useState<boolean>(false);
    const [movieDetails, setMovieDetails] = useState<string>('');

  const buttonHandler = (id: number, pData: {}) => {
    setMovieDetails(JSON.stringify(pData));
    setBtnIsClick(!btnIsClick);

  };
  
  return (
    <div>
        <Card sx={{m: 1, minHeight: 80,}}>
            <CardHeader
              avatar={
                <Avatar sx={{ bgcolor: theme.palette.text.primary }} aria-label="recipe">
                  {movieInfo.title.charAt(0).toLocaleUpperCase()}
                </Avatar>
              }
              action={
                <IconButton sx={{color: theme.palette.text.primary}} aria-label="open-modal" onClick={() => buttonHandler(movieInfo.id, movieInfo.movieData) }>
                  <OpenIcon />
                </IconButton>
              }
              title={movieInfo.title}
              subheader={`Movie Episode: ${movieInfo.episode}`}
            />
          </Card>
          {btnIsClick && <MovieInfoModal movie={movieDetails}/>}
    </div>
  )
}

export default MovieCard