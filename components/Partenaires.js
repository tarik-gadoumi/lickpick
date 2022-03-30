
import * as React from 'react';
import {Button, Card, CardActions, CardContent, CardMedia, Grid, Typography, Link, Container, CardActionArea, Stack, Avatar, IconButton, Box}from '@mui/material/';


export default function Partenaires() {
  return (
    <Container className='partenaires'  sx={{mb: 4, mt: 6}} >
        <Stack direction="row" spacing={2} justifyContent="space-between" alignItems="center" >
        <Card sx={{ height: '100px', width: '100px', display: 'flex', flexDirection: 'column', boxShadow: 0 }}>
            <CardMedia component="img" src="/french-tech.png" alt="frenchtech"/>
        </Card>
        <Card sx={{   height: '100px', width: '100px', display: 'flex', flexDirection: 'column', boxShadow: 0  }}>
            <CardMedia component="img" src="/france-relance.png" alt="france-relance"/>
        </Card>
        <Card sx={{  height: '100px', width: '100px', display: 'flex', flexDirection: 'column', boxShadow: 0, pt: 4  }}>
            <CardMedia component="img" src="/initiative.png" alt="initiative"/>
        </Card>
        <Card sx={{ height: '100px', width: '100px', display: 'flex', flexDirection: 'column', boxShadow: 0  }}>
            <CardMedia component="img" src="/provence-promotion.png" alt="provence-promotion"/>
        </Card>
        <Card sx={{ height: '100px', width: '100px', display: 'flex', flexDirection: 'column', boxShadow: 0  }}>
            <CardMedia component="img" src="/accelerateur.png" alt="accelerateur"/>
        </Card>
         
        </Stack>
    </Container>
  );
}

