import * as React from 'react';
import {Button, Card, CardActions, CardContent, CardMedia, Grid, Typography, Link, Container, CardActionArea, Stack, Avatar, IconButton, Box}from '@mui/material/';


export default function Preinscription() {
  return (
    <Container  sx={{mb: 4}} >
      <Stack >
           <Typography align='center' variant='h3'>Préinscrivez vous sans plus tarder</Typography>
      </Stack>
 
     <Stack direction={{xs:"column", md:"row",}} spacing={2}>
        <Card sx={{ maxHeight: '100%', display: 'flex', flexDirection: 'column' }}>
            <CardMedia sx={{ maxHeight: '100%'}} component="img" src="/ecole.png" alt="ecole"/>
              <CardContent sx={{ flexGrow: 1 }} justifyContent="center" alignItems="center">
                <Typography align="center" gutterBottom variant="h5" component="h5">
                Je suis une école
                </Typography>
                <Typography align="center">
                Je veux aider nos étudiants, trouver des entreprises partenaires ou en savoir plus.
                </Typography>
              </CardContent>
              <CardActions sx={{display: 'flex', justifyContent: 'center'}}>
                <Button variant="contained" size="small" sx={{backgroundColor:"warning.dark", borderRadius: "400px", p: 1.5, width:'60%'}} >Découvrir la solution</Button>
              </CardActions>
            </Card>

   
            <Card sx={{ maxHeight: '100%', display: 'flex', flexDirection: 'column' }}>
              <CardMedia  sx={{ maxHeight: '100%', mb: 5}} component="img" src="/etudiant.png" alt="etudiant"/>
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography align="center" gutterBottom variant="h5" component="h5">
                Je suis un(e) étudiant(e)                    
                </Typography>
                <Typography align="center">
                Je veux trouver un stage, une alternance ou une formation.
                </Typography>
              </CardContent>
              <CardActions sx={{display: 'flex', justifyContent: 'center'}} >
                <Button variant="contained" size="small" sx={{borderRadius: "400px", p: 1.5, width:'70%'}}>S'inscrire</Button>
              </CardActions>
            </Card>

            <Card sx={{ maxHeight: '100%', display: 'flex', flexDirection: 'column' }} >
               <CardMedia  sx={{ maxHeight: '100%', mb: 2}} component="img" src="/recruteur.png" alt="recruteur"/>
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography align="center" gutterBottom variant="h5" component="h5">
                Je suis une entreprise                
                </Typography>
                <Typography align="center">
                Je veux trouver des étudiants, des écoles partenaires ou en savoir plus.
                </Typography>
              </CardContent>
              <CardActions sx={{display: 'flex', justifyContent: 'center'}} >
                <Button color="secondary" variant="contained" size="small" sx={{borderRadius: "400px", p: 1.5, width:'60%'}}>Découvrir la solution</Button>
              </CardActions>
            </Card>
    </Stack>
  </Container>
  );
}