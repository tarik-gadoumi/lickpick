import * as React from 'react';
import {TextField, Box, Button, Typography, Container} from '@mui/material';

export default function Newsletter() {
  return (
    <Box sx={{display: 'flex', flexDirection: 'column', background:'lightblue', p: 4}}  justifyContent="center" alignItems="center">
      <Typography align="center" variant='h4'>Prêt à vous lancer ?</Typography>
      <Typography align="center">Inscrivez-vous notre newsletters pour recevoir nos conseils et actualités</Typography>
         <Box component="form"  sx={{  display: 'flex', flexDirection: 'column'}}  justifyContent="center" alignItems="center" 
         noValidate
         autoComplete="off"
            >
        <div>
            <TextField required defaultValue="Votre Adresse mail" />
        <Button variant="contained" sx={{borderRadius: "40px", width: "400px" }}>S'inscrire</Button>
        </div>
  
        </Box>
    </Box>
  );
}