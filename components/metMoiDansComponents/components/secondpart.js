import AnimatedPage from './ animatedPage';
import { Bigg, Smalll, Homee } from './secondPartImgs';
import { Stack } from '@mui/material';
import * as mq from '../styles/mq';

export default function SecondeParag({ offset }) {
  return offset >= 150 ? (
    <AnimatedPage>
      <Stack
        sx={{
          display: 'grid',
          justifyItems: 'center',
          alignItems: 'center',
          gridTemplateColumns: 'repeat(2,1fr)',
          gridTemplateRows: 'repeat(2,1fr)',
          [mq.small]: {
            gridTemplateColumns: '1fr',
            gridTemplateRows: 'auto',
            justifyContent: 'center',
            width: '100%',
          },
        }}
      >
        <Bigg />
        <Smalll />
        <Homee />
      </Stack>
    </AnimatedPage>
  ) : (
    'Keep scrolling  down ...'
  );
}
