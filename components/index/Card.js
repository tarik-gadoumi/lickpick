import * as React from 'react';
import {Card, CardContent, Typography, Box} from '@mui/material/';




const IndexCard = ({icon, title, description}) => {
  return (
    <Card sx={styles.cardContainer}>
          <Box sx={styles.imageContainer}>
        <img height='45' width='45' src={`/icons/${icon}.svg`}></img>
        </Box>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" align='center'>
            {title}
          </Typography>
          <Typography variant="body2" align='center' color="text.secondary">
            {description}
          </Typography>
        </CardContent>
    </Card>
  );
}

export default IndexCard

const styles = {
    imageContainer: {
        height: 80,
        width: 80,
        borderRadius: 80,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "#E4EEFF"
    },
    cardContainer : {
      background : 'white',
      display: 'flex',
      flex: 1,
      borderRadius: '20px',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      boxShadow: '0 3px 13px #D4E4FF',
      p: 4
    },
  };