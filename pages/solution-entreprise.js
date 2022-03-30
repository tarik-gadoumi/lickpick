import { Stack } from '@mui/material';
import * as mq from '../components/metMoiDansComponents/styles/mq';
import Form from '../components/metMoiDansComponents/components/form';
import Text from '../components/metMoiDansComponents/components/text';
import SecondeParag from '../components/metMoiDansComponents/components/secondpart';
//import './App.css';
import React, { useEffect, useState } from 'react';

export default function Page() {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const onScroll = () => setOffset(window.pageYOffset);
    // clean up code
    window.removeEventListener('scroll', onScroll);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  console.log(offset);
  return (
    <>
      <Stack
        sx={{
          margin: '0 auto',
          padding: '10em 2em',
          maxWidth: '100%',
          width: '100%',
          display: 'grid',
          gridAutoFlow: 'dense',
          gridGap: '1em',
          justifyItems: 'center',
          gridTemplateColumns: '1fr 1fr',
          [mq.small]: {
            gridTemplateColumns: '1fr',
            gridTemplateRows: 'auto',
            justifyContent: 'center',
            width: '100%',
          },
        }}
      >
        <Text />
        <Form />
      </Stack>

      <Stack
        sx={{
          width: '100%',
          zIndex: '-1',
          borderTop: '1px solid black',
        }}
      >
        <SecondeParag offset={offset} />
      </Stack>
    </>
  );
}
