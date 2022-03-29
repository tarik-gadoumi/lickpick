import {Box} from '@mui/material/';

export default function Home() {
  return (
      <Box style={styles.boxSearchContainer}>
        <img src={'/home.svg'} />
      </Box>
  )
}

const styles = {
  boxSearchContainer: {
      boxSizing: 'border-box',
      height: '100vh',
  }
};