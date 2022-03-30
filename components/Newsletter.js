import * as React from 'react';
import {TextField, Stack, Box, Button, Typography, Container} from '@mui/material';

export default function Newsletter() {
  return (
    <Container sx={styles.newsletter}>
    <Stack spacing={2} sx={{ borderRadius: '10px', height: '40vh' , p:3}}>
      <Typography align="center" variant='h4'>Prêt à vous lancer ?</Typography>
      <Typography align="center">Inscrivez-vous notre newsletters pour recevoir nos conseils et actualités</Typography>
         <Box component="form"  sx={{  display: 'flex', flexDirection: 'column'}}  justifyContent="center" alignItems="center" 
         noValidate
         autoComplete="off"
            >
        <Stack spacing={2}>
            <TextField sx={styles.input} required placeholder="Votre Adresse mail" />
        <Button variant="contained" sx={{borderRadius: "40px", width: "400px", p: 1, backgroundColor:'warning.main', boxShadow:0 }}>S'inscrire à la newsletter</Button>
        </Stack>
        </Box>
    </Stack>
    </Container>
  );
}


const styles = {
  input: {
    borderRadius: "10px",
  },

  newsletter: {
    backgroundImage: "url(/newsletter.png)",
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundColor: 'primary.light',
    borderRadius: '20px',
  }
};