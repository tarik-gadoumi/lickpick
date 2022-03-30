import * as React from 'react';
//import { jsx } from '@emotion/react';
import SendIcon from '@mui/icons-material/Send';
import { Gauche, Droite, Haut, BDroite, BGauche } from './autourDuForm';
import AnimatedPage from './ animatedPage';
import {
  Stack,
  TextField,
  FormControl,
  Box,
  FormHelperText,
  Button,
  Select,
  MenuItem,
  InputLabel,
  Link,
} from '@mui/material';
import * as mq from '../styles/mq';
const styles = {
  background: '#f1f1f1',
  '&:hover,&:focus': {
    background: 'white',
  },
};

export default function Form() {
  const [val, setVal] = React.useState('');
  function handleChange(e) {
    console.log(e.target.value);
    setVal(e.target.value);
  }
  return (
    <AnimatedPage>
      <Box
        sx={{
          gridColumn: '2/3',
          width: '450px',
          height: '600px',
          backgroundColor: '#F0F8FF',
          border: '0px solid black',
          borderRadius: '10px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          transition: 'transform .5s, box-shadow .3s',
          '&:hover': {
            boxShadow:
              ' 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)',
          },
        }}
      >
        <Stack
          sx={{
            postion: 'relative',
            [mq.images]: {
              display: 'none',
            },
          }}
        >
          <Gauche />
          <Haut />
          <Droite />
          <BDroite />
          <BGauche />
        </Stack>
        <Box
          sx={{
            width: '400px',
            minHeight: '500px',
            border: '0px solid black',
            borderRadius: '10px',
          }}
        >
          <FormControl>
            <Stack spacing={2} direction="column">
              <Stack spacing={1} direction="row">
                <TextField sx={styles} label="Nom*" />
                <TextField sx={styles} label="Prénom*" />
              </Stack>
              <Stack spacing={1} direction="row">
                <TextField sx={styles} label="Code postal entreprise*" />
                <TextField sx={styles} label="Téléphone portable*" />
              </Stack>
              <Stack spacing={2}>
                <TextField sx={styles} label="Domaine d'activité*" />
                <TextField sx={styles} label="Code Postal Entreprise*" />
              </Stack>
              <Stack>
                <Stack spacing={2}>
                  <TextField sx={styles} label="Email address" />
                  <FormControl fullWidth>
                    <InputLabel>Objet de votre demande</InputLabel>
                    <Select
                      value={val}
                      label=" Objet de votre demande"
                      onChange={handleChange}
                    >
                      <MenuItem value={10}>Ten</MenuItem>
                      <MenuItem value={20}>Twenty</MenuItem>
                      <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                    <FormHelperText id="my-helper-text">
                      *Champs Obligatoires
                    </FormHelperText>
                  </FormControl>
                  <Stack direction="row">
                    <Button
                      variant="contained"
                      startIcon={<SendIcon />}
                      sx={{ fontWeight: 'bold', height: '3rem' }}
                      children="Découvrir Linkpick"
                    />
                  </Stack>
                  <Link
                    component="button"
                    variant="body2"
                    sx={{ fontWeight: 'bold', whiteSpace: 'nowrap' }}
                    onClick={() => {
                      console.info("I'm a button.");
                    }}
                  >
                    En savoir plus sur la collecte de vos données personnelles
                  </Link>
                </Stack>
              </Stack>
            </Stack>
          </FormControl>
        </Box>
      </Box>
    </AnimatedPage>
  );
}
