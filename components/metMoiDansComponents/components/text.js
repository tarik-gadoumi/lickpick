import 'animate.css';
import { Stack, Button, Typography } from '@mui/material';
import DoneIcon from '@mui/icons-material/Done';
import * as React from 'react';
import AnimatedPage from './ animatedPage';
import GlobeContainer from '../globe/Globe';
const animations = {
  animate: { opacity: 1, x: 100 },
  initial: { opacity: 0, x: 0 },
  exit: { opacity: 0, x: -100 },
};
export default function Text() {
  //   const [x, setX] = React.useState('');

  return (
    <AnimatedPage variants={animations}>
      <Stack sx={{ gridColumn: '1/2' }}>
        <Stack
          sx={{
           
            color: '#0567F5',
          }}
        >
          <Typography variant='h2'>Recruter et accompagner</Typography>
        </Stack>
        <Stack sx={{ fontSize: '400%' }}><Typography variant='h2'>facilement vos futurs talents</Typography></Stack>
        <Stack sx={{ fontSize: '200%' }}> <Typography variant='h4'>Equipez-vous de Linkpick et</Typography></Stack>

        <Stack
          className="animate__animated animate__flipInX animate__delay-1s"
          sx={{
          //   animationDuration: '25s',
          //   animationIterationCount: 'infinite',
            // ,
          }}
        >
         <Typography color= 'secondary' variant='h4'> gérer vos documents facilement</Typography>
        </Stack>
        <Stack direction="column" display="grid" sx={{ marginBottom: '2rem' }}>
          <Button
            startIcon={<DoneIcon />}
            children={
              <Stack
                sx={{ color: 'black' }}
                children="-Un haut niveau de protection privées"
              />
            }
            variant="text"
            sx={{ justifySelf: 'start' }}
          />
          <Button
            startIcon={<DoneIcon />}
            children={
              <Stack
                sx={{ color: 'black' }}
                children="-Un haut niveau de protection privées"
              />
            }
            sx={{ justifySelf: 'start' }}
          />
          <Button
            startIcon={<DoneIcon />}
            children={
              <Stack
                sx={{ color: 'black' }}
                children="-Un haut niveau de protection privées"
              />
            }
            sx={{ justifySelf: 'start' }}
          />
        </Stack>
        <GlobeContainer />
      </Stack>
    </AnimatedPage>
  );
}
