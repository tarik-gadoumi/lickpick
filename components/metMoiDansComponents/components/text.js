import 'animate.css';
import { Stack, Button } from '@mui/material';
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
            fontSize: '400%',
            color: '#0567F5',
          }}
        >
          Recruter et accompagner
        </Stack>
        <Stack sx={{ fontSize: '400%' }}>facilement vos futurs talents</Stack>
        <Stack sx={{ fontSize: '200%' }}>Equipez-vous de Linkpick et</Stack>

        <Stack
          className="animate__animated animate__flipInX animate__delay-1s"
          sx={{
            animationDuration: '2s',
            animationIterationCount: 'infinite',
            color: '#01F527',
            fontSize: '200%',
          }}
        >
          gérer vos document facilement
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
