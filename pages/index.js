import { useState, useEffect } from 'react'
import { Button, Box, Stack, Container, TextField, Typography, Select, MenuItem } from '@mui/material/';
import TextSnippetIcon from '@mui/icons-material/TextSnippet';
import Newsletter from '../components/Newsletter';
import SearchIcon from '@mui/icons-material/Search';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import IndexCard from '../components/index/Card'
import IndexCardHorizon from '../components/index/CardHorizon'
import Preinscription from '../components/Preinscription'
import Partenaires from '../components/Partenaires'


export default function Home() {

  const [valueType, setValueType] = useState("alternance");
  const [valuePlace, setValuePlace] = useState("company");

  const handleChangeType = (event) => setValueType(event.target.value);
  const handleChangePlace = (event) => setValuePlace(event.target.value);
  useEffect(() => {
  gsap.to(".box1", {
    scrollTrigger: ".boxContainer", scrub: true,
    x: '0'
  });
  gsap.to(".box2", {
    scrollTrigger: ".boxContainer", 
    y: '0'
  });
  gsap.to(".box3", {
    scrollTrigger: ".boxContainer", 
    x: '0'
  });
  gsap.to(".typo", {
    scrollTrigger: ".boxContainer2", 

    y: '0'
  });
  gsap.to(".horizon", {
    scrollTrigger: ".boxContainer2", 

    y: '0'
  });
  gsap.to(".boxContainer2", {
    scrollTrigger: ".bonhomme", 

    x: '0'
  });
  gsap.to(".bonhomme", {
    scrollTrigger: ".bonhomme", 
    delay: 0.5,
    x: '-80'
  });
  gsap.to(".dashboard", {
    scrollTrigger: ".boxContainer3", 

    y: '0'
  });
  gsap.to(".preinscription", {
    scrollTrigger: ".boxContainer4", 
    y: '0'
  });
  gsap.to(".partenaires", {
    scrollTrigger: ".partenaires", 
    y: '0'
  });
}, []);

  return (
    <>
      <Box sx={styles.boxSearchContainer}>
        <Box sx={styles.backgroundContainer}></Box>
        <Container sx={styles.boxSearch}>
          <Stack spacing={2}>
            <Stack spacing={2}>
              <Typography align="center"><Typography color='primary' variant="h3">L'emploi,</Typography><Typography variant="h3">au bout des doigts</Typography></Typography>
              <Typography align="center">Linkpick est la première solution qui aide et met en relation
                les étudiants, les entreprises et les écoles, avant, pendant et après la formation.</Typography>
            </Stack>
            <Stack sx={styles.searchForm} spacing={2} >
              <Stack spacing={2} direction={{ xs: 'column', md: 'row' }}>
                <Stack sx={{ flex: 1 }} spacing={1}>
                  <Stack fullWidth direction='row'><SearchIcon color='primary' /><Typography>Vous recherchez</Typography></Stack>
                  <Select
                    fullWidth
                    label="Type de contrat"
                    displayEmpty
                    value={valuePlace}
                    onChange={handleChangePlace}
                  >
                    <MenuItem value="company">Une entreprise</MenuItem>
                    <MenuItem value="school">Une école</MenuItem>
                  </Select>
                </Stack>
                <Stack sx={{ flex: 1 }} spacing={1}>
                  <Stack fullWidth direction='row'><TextSnippetIcon color='primary' /><Typography>Type de contrat</Typography></Stack>
                  <Select
                    fullWidth
                    label="Type de contrat"
                    displayEmpty
                    value={valueType}
                    onChange={handleChangeType}
                  >
                    <MenuItem value="alternance">Alternance</MenuItem>
                    <MenuItem value="stage">Stage</MenuItem>
                  </Select>
                </Stack>
                <Stack sx={{ flex: 1 }} spacing={1}>
                  <Stack fullWidth direction='row'><LocationOnIcon color='primary' /><Typography>Où ?</Typography></Stack>
                  <TextField
                    fullWidth
                    label="Ville ou code postal"
                    placeholder="Ville ou code postal"
                  />
                </Stack>
              </Stack>
              <Button variant='contained' sx={{ boxShadow: 0 }}>Rechercher</Button>
            </Stack>
          </Stack>
        </Container>

        <Container sx={{overflow: "hidden", p: 3}}>
          <Stack  spacing={5} direction={{ xs: 'column', md: 'row' }}>
            <Box className='box1' sx={{transform: 'translateX(-500px)'}}>
            <IndexCard className='box1' icon='explore' title='Choisissez votre voie' description='Explorez les trajectoires de formation
            et candidatez en quelques clics dans 
            les écoles qui vous correspondent.' />
            </Box>
            <Box className='box2' sx={{transform: 'translateY(+500px)'}} >
            <IndexCard icon='work' title='Trouvez votre emploi' description="Validez vos diplômes avec nos 
              entreprises partenaires qui proposent des 
              stages ou des alternances toute l'année." /></Box>
              <Box className='box3' sx={{transform: 'translateX(+500px)'}} >
            <IndexCard  icon='insights' title='Soyez accompagné' description="Linkpick est ses partenaires s'engagent 
              à vous accompagner et à vous épauler
              tout au long de votre parcours d'étudiant." /></Box>
          </Stack>
        </Container>
      </Box>
      <Stack className='boxContainer' spacing={5} direction={{ xs: 'column', md: 'row' }} sx={styles.boxContainer}>
        <Stack spacing={3} width={{ xs: '90%', md: '40%' }} ml={5}>
          <Container className='boxContainer2' sx={{transform: 'translateX(-1000px)'}}>
            <Typography className='typo' sx={{transform: 'translateY(-1000px)'}} variant='h4' mb={3}>En quelques clics ...</Typography>
            <Stack spacing={3}>
              <IndexCardHorizon icon='person' title='Plus de CV,' subtitle='partagez votre profil' description="Validez vos diplômes avec nos entreprises
            partenaires qui proposent des stages ou des
            alternances toute l'année." />
              <IndexCardHorizon icon='handDown' title='Des organismes,' subtitle='à portée de main' description="Validez vos diplômes avec nos entreprises
              partenaires qui proposent des stages ou des
              alternances toute l'année." />
              <IndexCardHorizon icon='podcast' title='Une plateforme,' subtitle='un seul but' description="Validez vos diplômes avec nos entreprises
          partenaires qui proposent des stages ou des
          alternances toute l'année." />
            </Stack>
          </Container>
        </Stack>
        <Stack width='60%' sx={styles.boxIllustration} className='boxContainer2'><Box className='bonhomme' sx={{transform: 'translateX(1000px)'}} ><img height= 'auto' width= '50%' src="/bonhomme.png"></img></Box></Stack>
      </Stack>
      <Stack  align='center' sx={[styles.boxContainer, styles.printsContainer]}>
        <Container className='boxContainer3' >
        <Stack sx={{maxWidth: { xs: '90%', md: '60%' }}}>
          <Typography align='center' variant='h5'>Concentrez-vous sur l'essentiel avec Linkpick</Typography>
          <Typography align='center'>La solution Linkpick est conçue pour piloter facilement et au même endroit sa vie étudiante.
            Gagnez du temps pour les échanges qui comptent vraiment.</Typography>
        </Stack>
        <Box  className='dashboard' sx={{transform: 'translateY(+1000px)'}} ><img width="100%" src='/dashboard.png' ></img></Box>
        </Container>
      </Stack>
      <Stack  className='boxContainer4' sx={{overflow: "hidden"}} spacing={3}>
        <Typography align='center' variant='h5'>Construisez enfin votre carrière au rythme de votre parcours</Typography>
        <Box className="preinscription" sx={{transform: 'translateY(+500px)'}}><Preinscription/></Box>
      </Stack>
      <Stack className='boxContainer5' sx={{overflow: "hidden"}}>
        <Box className="partenaires" sx={{transform: 'translateY(+500px)'}}><Partenaires/></Box>
      </Stack>
      <Stack>
        <Newsletter/>
      </Stack>
    </>

  )

  
 

}




const styles = {
  backgroundContainer: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: '30%',
    background: "no-repeat url('/home.png')",
    backgroundPosition: 'bottom',
    backgroundSize: "cover",
    zIndex: -1
  },
  boxSearchContainer: {
    position: 'relative',
    minHeight: '100vh',
    pt: 10
  },
  searchForm: {
    background: 'white',
    borderRadius: '10px',
    p: 2
  },
  boxSearch: {
    display: 'flex',
    height: '95%',
    justifyContent: 'center',
    alignItems: 'top',
    maxWidth: { xs: '90%', md: '60%' },
    mb: 20
  },
  boxContainer: {
    pt: 10,
    pb: 10,
    minHeight: "100vh",
    display: 'flex',
    overflow: "hidden"
  },
  printsContainer: {
    background: "no-repeat url('/prints.png')",
    backgroundPosition: 'center',
    backgroundSize: "cover",
  },
  boxIllustration: {
    flex: 1,
    overflow: "hidden",
    background: "no-repeat url('/sun-illustration.png')",
    backgroundPosition: 'right',
    backgroundSize: "contain",
    transform: 'translateX(500px)',
    display: {md: "flex", xs: "none"},
    alignItems: 'end',
    justifyContent: "center",

  }
};
