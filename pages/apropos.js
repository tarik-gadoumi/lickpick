import * as React from 'react';
import {Button, Card, CardActions, CardContent, CardMedia, Grid, Typography, Link, Container, CardActionArea, Stack, Avatar, IconButton, Box}from '@mui/material/';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Preinscription from '../components/Preinscription';
import Partenaires from '../components/Partenaires';

export default function Apropos() {
  return (
    <Container>
        <Container sx={{mb: 4}} >
            <Typography variant='h1'>LINKPICK</Typography>
            <Typography variant='h1'>LA SOLUTION QUI FACILITE LA RELATION ENTRE ÉTUDIANTS, ENTREPRISES ET ÉCOLES</Typography>
        </Container>
      
    
          <Container  sx={{mb: 4}} >
            <Typography variant='h2'>Linkpick, c'est aussi une histoire…</Typography>
            <Typography>Il y a peu de temps encore, nous aussi nous étions étudiants. Nous avons connu les longues sessions de recherche d’informations sur internet, les dizaines de CV personnalisés envoyés et restés sans réponse, les tonnes de documents administratifs à échanger avec l’école, etc...</Typography>
            <Typography>Bref, une belle perte de temps - et parfois du découragement - alors que nous souhaitons nous concentrer sur l’essentiel : apprendre, identifier des écoles ou des opportunités de stage ou d'alternance, se former et gérer en un seul point tous nos contrats, suivi pédagogique et autres.</Typography>
            <Typography>C’est donc en pensant aux besoins des étudiants que Linkpick est née, et c’est en y intégrant les besoins des écoles et des entreprises que la solution s’est développée, créant ainsi un environnement vertueux.</Typography>
            <Typography>Nous sommes convaincus que : </Typography>
            <Typography sx={{ fontWeight: 'bold' }} > La recherche d’école, de stage et d’alternance peut être grandement facilitée. Les entreprises, écoles et étudiants qui s’engagent dans ce processus peuvent y établir des liens durables de confiance, au bénéfice de tous.</Typography>
            <Typography>Maintenant, avec Linkpick, nous simplifions et facilitons l'accès aux périodes professionnalisantes des étudiants (stage et alternance) avec <Link>un seul objectif, fluidifier les échanges et les démarches entre les écoles, les étudiants et les entreprises.</Link> </Typography>
            <Typography>Nous sommes soutenus dans cette démarche par des partenaires du monde tech ou universitaire et améliorons à présent à temps plein notre plateforme de mise en relation.</Typography>
            <Typography>Nous grandissons avec vous, alors n’hésitez pas à nous contacter pour nous donner votre avis ou nous faire des suggestions ! </Typography>
            <Typography>À bientôt sur la plateforme,</Typography> 
            <Typography>Toute l’équipe de Linkpick !</Typography>
          </Container>
        
        <Container  sx={{mb: 4}} >
            <Stack direction="row" spacing={2} justifyContent="space-between" alignItems="center" >
                <Card sx={{ height: '50%', display: 'flex', flexDirection: 'column', boxShadow: 0  }}  justifyContent="center" alignItems="center">
                <Avatar alt="Arnaud" src="arnaud.jpeg" sx={{ width: 80, height: 80 }}/>
                    <CardContent sx={{ flexGrow: 1 }}>
                        <Typography gutterBottom variant="h5" component="h5"> Arnaud Bichi </Typography>
                        <Typography> Co-fondateur - CTO </Typography>
                    </CardContent>
                    <CardActions>
                        <IconButton  aria-label="Linkedin">
                            <LinkedInIcon/>
                        </IconButton>
                    </CardActions>
                    </Card>

                
                    <Card sx={{ height: '50%', display: 'flex', flexDirection: 'column', boxShadow: 0  }}>
                      <Avatar alt="Quentin" src="quentin.jpeg" sx={{ width: 80, height: 80 }}/>
                      <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h5"> Quentin Bichi </Typography>
                    <Typography> Co-fondateur - CEO </Typography>
                  </CardContent>
                  <CardActions>
                    <IconButton  aria-label="Linkedin">
                        <LinkedInIcon/>
                     </IconButton>
                  </CardActions>
                </Card>

                <Card sx={{ height: '50%', display: 'flex', flexDirection: 'column', boxShadow: 0  }}>
                <Avatar alt="Leslie" src="leslie.jpeg" sx={{ width: 80, height: 80 }}/>
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h5"> Leslie Hue </Typography>
                    <Typography> CPO </Typography>
                  </CardContent>
                  <CardActions>
                    <IconButton  aria-label="Linkedin">
                        <LinkedInIcon/>
                     </IconButton>
                  </CardActions>
                </Card>
            </Stack>
        </Container>

    <Container  sx={{mb: 4}} >
        <Stack direction="row" spacing={2}>
            <Card sx={{ display: 'flex', boxShadow: 0  }}>
                <Box sx={{ display: 'flex', flexDirection: 'column' }}  justifyContent="center" alignItems="center">
                    <CardContent>
                        <Typography component="div" variant="h2"> Linkpick au forum Medinjob par Madeinmarseille :</Typography>
                        <Typography> "Pour les deux frères, mettre l’étudiant ou la personne en reconversion au cœur de la démarche est essentiel, [...]" </Typography>
                        <Link>Lire l'article</Link>
                    </CardContent>
                </Box>
                <CardMedia component="img"  image="/photo-apropos.png" alt="Photo à propos"  sx={{ width: '50%'}}/>
                </Card>
            </Stack>
    </Container>

    <Container  sx={{mb: 4}} > 
        <Stack direction="row" spacing={2}>
            <Card sx={{ display: 'flex', boxShadow: 0 }}>
                <CardMedia component="img"  image="/photo-apropos-2.png" alt="Photo à propos"  sx={{ width: '50%'}}/>
                <Box sx={{ display: 'flex', flexDirection: 'column' }}  justifyContent="center" alignItems="center">
                    <CardContent >
                        <Typography component="div" variant="h2"> Nos offres d'emploi déjà disponibles</Typography>
                        <Typography> Retrouvez toutes nos offres de stage et d'alternance proposées par nos entreprises partenaires sur notre réseau LinkedIn. </Typography>
                        <Link>Lire l'article</Link>
                    </CardContent>
                </Box>
                
                </Card>
            </Stack>
    </Container>
    

    <Partenaires/>
    
    <Preinscription/>
    

        
        
 


    </Container>
  )
}
