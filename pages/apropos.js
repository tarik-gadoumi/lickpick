import * as React from 'react';
import {Button, Card, CardActions, CardContent, CardMedia, Grid, Typography, Link, Container, CardActionArea, Stack, Avatar, IconButton, Box}from '@mui/material/';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Preinscription from '../components/Preinscription';
import Partenaires from '../components/Partenaires';

export default function Apropos() {
  return (
    <Box>
        <Box sx={styles.apropos} >
            <Typography sx={{mb: 6}} color='#ffffff' align='center' variant='h1'>LINKPICK</Typography>
            <Typography color='#ffffff' align='center' variant='h4'>LA SOLUTION QUI FACILITE LA RELATION ENTRE ÉTUDIANTS, ENTREPRISES ET ÉCOLES</Typography>
        </Box>
      
    
          <Container  sx={{mb: 16, mt: 8}} >
            <Box sx={{mb: 4}}>
              <Typography align='center' variant='h2'>Linkpick, c'est aussi une histoire…</Typography>
            </Box>
            
            <Typography color='#5971b0' align='center'>Il y a peu de temps encore, nous aussi nous étions étudiants. Nous avons connu les longues sessions de recherche d’informations sur internet, les dizaines de CV personnalisés envoyés et restés sans réponse, les tonnes de documents administratifs à échanger avec l’école, etc...</Typography>
            <Typography color='#5971b0' align='center'>Bref, une belle perte de temps - et parfois du découragement - alors que nous souhaitons nous concentrer sur l’essentiel : apprendre, identifier des écoles ou des opportunités de stage ou d'alternance, se former et gérer en un seul point tous nos contrats, suivi pédagogique et autres.</Typography>
            <Typography color='#5971b0' align='center'>C’est donc en pensant aux besoins des étudiants que Linkpick est née, et c’est en y intégrant les besoins des écoles et des entreprises que la solution s’est développée, créant ainsi un environnement vertueux.</Typography>
            <Typography color='#5971b0' align='center'>Nous sommes convaincus que : </Typography>
            <Typography color='#5971b0' align='center' sx={{ fontWeight: 'bold' }} > La recherche d’école, de stage et d’alternance peut être grandement facilitée. Les entreprises, écoles et étudiants qui s’engagent dans ce processus peuvent y établir des liens durables de confiance, au bénéfice de tous.</Typography>
            <Typography color='#5971b0' align='center'>Maintenant, avec Linkpick, nous simplifions et facilitons l'accès aux périodes professionnalisantes des étudiants (stage et alternance) avec <Link sx={{color: 'primary.main', fontWeight: 'bold'}} underline="none">un seul objectif, fluidifier les échanges et les démarches entre les écoles, les étudiants et les entreprises.</Link> </Typography>
            <Typography color='#5971b0' align='center'>Nous sommes soutenus dans cette démarche par des partenaires du monde tech ou universitaire et améliorons à présent à temps plein notre plateforme de mise en relation.</Typography>
            <Typography color='#5971b0' align='center'>Nous grandissons avec vous, alors n’hésitez pas à nous contacter pour nous donner votre avis ou nous faire des suggestions ! </Typography>
            <Typography color='#5971b0' align='center'>À bientôt sur la plateforme,</Typography> 
            <Typography color='#5971b0' align='center'>Toute l’équipe de Linkpick !</Typography>
          </Container>
        
        <Container  sx={{mb: 16}} >
            <Stack direction="row" spacing={2} justifyContent="space-between" alignItems="center" >
                <Card sx={{ height: '50%', display: 'flex', flexDirection: 'column', boxShadow: 0,  justifyContent: 'center' }}>
                  <Box sx={{display: 'flex', justifyContent: 'center'}}>
                    <Avatar alt="Arnaud" src="arnaud.jpeg" sx={{ width: 80, height: 80}}/>
                  </Box>
                    <CardContent sx={{ flexGrow: 1 }}>
                        <Typography align="center" gutterBottom variant="h5" component="h5"> Arnaud Bichi </Typography>
                        <Typography color='#5971b0' align="center" fontWeight= 'bold'> Co-fondateur - CTO </Typography>
                    </CardContent>
                    <CardActions sx={{display: 'flex', justifyContent: 'center', color: 'primary'}}>
                      <Link href='https://www.linkedin.com/in/arnaud-bichi/'>
                        <IconButton  aria-label="Linkedin" >
                            <LinkedInIcon  color="primary" fontSize="large" />
                        </IconButton>
                      </Link>
                      
                    </CardActions>
                    </Card>

                
                    <Card sx={{ height: '50%', display: 'flex', flexDirection: 'column', boxShadow: 0, justifyContent: 'center'  }}>
                      <Box sx={{display: 'flex', justifyContent: 'center'}}>
                        <Avatar alt="Quentin" src="quentin.jpeg" sx={{ width: 80, height: 80 }}/>
                      </Box>
                      <CardContent sx={{ flexGrow: 1 }}>
                    <Typography align="center"  gutterBottom variant="h5" component="h5"> Quentin Bichi </Typography>
                    <Typography align="center" color='#5971b0' fontWeight= 'bold' > Co-fondateur - CEO </Typography>
                  </CardContent>
                  <CardActions sx={{display: 'flex', justifyContent: 'center'}}>
                    <Link href="https://www.linkedin.com/in/quentin-bichi-79341b128/">
                    <IconButton  aria-label="Linkedin">
                        <LinkedInIcon fontSize="large"  color="primary"/>
                     </IconButton>
                     </Link>
                  </CardActions>
                </Card>

                <Card sx={{ height: '50%', display: 'flex', flexDirection: 'column', boxShadow: 0, justifyContent: 'center'  }}>
                  <Box sx={{display: 'flex', justifyContent: 'center'}}>
                    <Avatar alt="Leslie" src="leslie.jpeg" sx={{ width: 80, height: 80 }}/>
                  </Box>
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography align="center" gutterBottom variant="h5" component="h5"> Leslie Hue </Typography>
                    <Typography align="center" color='#5971b0' fontWeight= 'bold'> CPO </Typography>
                  </CardContent>
                  <CardActions sx={{display: 'flex', justifyContent: 'center'}}>
                    <Link href='https://www.linkedin.com/in/leslie-hue/'>
                       <IconButton  aria-label="Linkedin"  sx={{ display: 'flex', justifyContent: 'center'}}>
                        <LinkedInIcon fontSize="large"  color="primary"/>
                     </IconButton>
                    </Link>
                 
                  </CardActions>
                </Card>
            </Stack>
        </Container>




    <Container  sx={{mb: 16}} >
        <Stack  spacing={2} direction={{xs:"column", md:"row"}}>
                <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent:"space-between", minWidth: '50%' }}>
                    <Typography component="div" variant="h3" sx={{mb: 4}}> Linkpick au forum Medinjob par Madeinmarseille :</Typography>
                    <Typography variant="h5" color='#5971b0' sx={{mb: 4}}> "Pour les deux frères, mettre l’étudiant ou la personne en reconversion au cœur de la démarche est essentiel, [...]" </Typography>
                    <Link variant="h5" underline="none" href='https://madeinmarseille.net/100704-les-metiers-du-numerique-a-portee-de-main-grace-au-forum-medinjob/'>Lire l'article</Link>
                </Box>
                <Box  sx={{ minWidth: '50%'}}>
                    <CardMedia component="img"  image="/photo-apropos.png" alt="Photo à propos"  />
                </Box>
            </Stack>
    </Container>

    <Container  sx={{xs:"column", md:"row", mb: 16}} > 
        <Stack direction={{xs:"column", md:"row"}} spacing={2}>
                <Box sx={{ minWidth: '50%'}}>
                  <CardMedia component="img"  image="/photo-apropos-2.png" alt="Photo à propos"/>
                </Box>
                
                <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent:"space-evenly", minWidth: '50%'}}>
                  <Typography component="div" variant="h3" sx={{mb: 4}}> Nos offres d'emploi déjà disponibles</Typography>
                  <Typography variant="h5" color='#5971b0' sx={{mb: 4}}> Retrouvez toutes nos offres de stage et d'alternance proposées par nos entreprises partenaires sur notre réseau LinkedIn. </Typography>
                  <Link variant="h5" underline="none" href='https://www.linkedin.com/company/linkpick/posts/'>Lire l'article</Link>
                </Box>
            </Stack>
    </Container>
    
    <Box xs={{mb: 12, mt: 8}}>
        <Stack xs={{mb: 8}}>
         <Typography align='center' variant='h5'>Nos partenaires institutionnels</Typography>
        </Stack>
        <Partenaires/>

    </Box>
   
    
    <Box sx={{mb: 8}}>
         <Stack sx={{mb: 4}}>
           <Typography align='center' variant='h3'>Préinscrivez vous sans plus tarder</Typography>
      </Stack>
    <Preinscription/>
    </Box>

    </Box>
  )
}

const styles = {
  apropos: {
    backgroundImage: "url(/fontaine.png)",
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundColor: 'primary.main',
    paddingTop: 12,
    paddingBottom: 18,
   
  },

};
