import { Button, Box, Stack, Container, TextField, Typography, Select, FormControl, MenuItem, InputLabel } from '@mui/material/';
import TextSnippetIcon from '@mui/icons-material/TextSnippet';
import Newsletter from '../components/Newsletter';

export default function Home() {


  return (
<Container>
    <Box sx={styles.boxSearchContainer}>
      {/* <img style={styles.imageHome} src={'/home.svg'} /> */}
      <Container sx={styles.boxSearch}>
        <Stack spacing={2}>
          <Stack spacing={2}>
            <Typography align="center"><Typography variant="h3">L'emploi,</Typography><Typography variant="h3">au bout des doigts</Typography></Typography>
            <Typography align="center">Linkpick est la première solution qui aide et met en relation
              les étudiants, les entreprises et les écoles, avant, pendant et après la formation.</Typography>
          </Stack>
          <Stack sx={styles.searchForm} spacing={2} >
            <Stack direction= {{xs : 'column' , md : 'row'}}>
              <FormControl fullWidth>
                <InputLabel>Vous recherchez</InputLabel>
                <Select
                  label="Vous recherchez"
                // value={age}
                // onChange={handleChange}
                >
                  <MenuItem value="company">Une entreprise</MenuItem>
                  <MenuItem value="school">Une école</MenuItem>
                </Select>
              </FormControl>
              <FormControl fullWidth>
                <Stack direction='row'><TextSnippetIcon/><Typography>Type de contrat</Typography></Stack>
                <Select
                  label="Type de contrat"
                // value={age}
                // onChange={handleChange}
                >
                  <MenuItem value="alternance">Alternance</MenuItem>
                  <MenuItem value="stage">Stage</MenuItem>
                </Select>
              </FormControl>
              <FormControl fullWidth>
                <TextField
                  label="Ville ou code postal"
                  placeholder="Ville ou code postal"
                />
              </FormControl>
            </Stack>
            <Button variant='contained'>Rechercher</Button>
          </Stack>
        </Stack>
      </Container>
      <Container>
      </Container>
    </Box>

    <Container >
      <Newsletter/>
    </Container>

    </Container>
  )
}



  
const styles = {
  boxSearchContainer: {
  
    background : 'primary.main',
  },
  searchForm : {
    background : 'white',
    borderRadius : '10px',
    p : 2
  },
  boxSearch: {
    border: '1px solid black',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    maxWidth: { xs: '90%', md: '60%' }
  },

};
