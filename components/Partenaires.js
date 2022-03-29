
import * as React from 'react';
import {Button, Card, CardActions, CardContent, CardMedia, Grid, Typography, Link, Container, CardActionArea, Stack, Avatar, IconButton, Box}from '@mui/material/';


export default function Partenaires() {
  return (
    <Container className='partenaires'  sx={{mb: 4}} >
    <Stack xs={{mb: 6}}>
         <Typography align='center' variant='h3'>Nos partenaires institutionnels</Typography>
    </Stack>
   
        <Stack direction="row" spacing={2} justifyContent="space-between" alignItems="center" >
        <Card sx={{ height: '100px', width: '100px', display: 'flex', flexDirection: 'column', boxShadow: 0 }}>
            <CardMedia component="img" src="/French_Tech.png" alt="frenchtech"/>
        </Card>
        <Card sx={{   height: '100px', width: '100px', display: 'flex', flexDirection: 'column', boxShadow: 0  }}>
            <CardMedia component="img" src="/france-relance.jpg" alt="france-relance"/>
        </Card>
        <Card sx={{  height: '150px', width: '150px', display: 'flex', flexDirection: 'column', boxShadow: 0  }}>
            <CardMedia component="img" src="/initiative.png" alt="initiative"/>
        </Card>
        <Card sx={{ height: '100px', width: '100px', display: 'flex', flexDirection: 'column', boxShadow: 0  }}>
            <CardMedia component="img" src="/provence_promotion.jpeg" alt="provence-promotion"/>
        </Card>
        <Card sx={{ height: '150px', width: '150px', display: 'flex', flexDirection: 'column', boxShadow: 0  }}>
            <CardMedia component="img" src="/accelerateur.png" alt="accelerateur"/>
        </Card>
         
        </Stack>
    </Container>
  );
}

