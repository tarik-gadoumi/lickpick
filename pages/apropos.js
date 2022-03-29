import Head from 'next/head'
import * as React from 'react';
import {Button, Card, CardActions, CardContent, CardMedia, Grid, Typography, Link, Container, CardActionArea, Stack, Avatar, IconButton, Box}from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

export default function Apropos() {
  return (
    <div className="container">
      <Head>
        <title>A propos</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>

        <Container>
            <Typography variant='h1'>LINKPICK</Typography>
            <Typography variant='h1'>LA SOLUTION QUI FACILITE LA RELATION ENTRE ÉTUDIANTS, ENTREPRISES ET ÉCOLES</Typography>
        </Container>
      
    
          <Container>
            <Typography variant='h2'>Linkpick, c'est aussi une histoire…</Typography>
            <Typography>Il y a peu de temps encore, nous aussi nous étions étudiants. Nous avons connu les longues sessions de recherche d’informations sur internet, les dizaines de CV personnalisés envoyés et restés sans réponse, les tonnes de documents administratifs à échanger avec l’école, etc...</Typography>
            <Typography>Bref, une belle perte de temps - et parfois du découragement - alors que nous souhaitons nous concentrer sur l’essentiel : apprendre, identifier des écoles ou des opportunités de stage ou d'alternance, se former et gérer en un seul point tous nos contrats, suivi pédagogique et autres.</Typography>
            <Typography>C’est donc en pensant aux besoins des étudiants que Linkpick est née, et c’est en y intégrant les besoins des écoles et des entreprises que la solution s’est développée, créant ainsi un environnement vertueux.</Typography>
            <Typography>Nous sommes convaincus que : </Typography>
            <Typography sx={{ fontWeight: 'bold' }} > La recherche d’école, de stage et d’alternance peut être grandement facilitée. Les entreprises, écoles et étudiants qui s’engagent dans ce processus peuvent y établir des liens durables de confiance, au bénéfice de tous.</Typography>
            <Typography>Maintenant, avec Linkpick, nous simplifions et facilitons l'accès aux périodes professionnalisantes des étudiants (stage et alternance) avec <Link className='p_diff'>un seul objectif, fluidifier les échanges et les démarches entre les écoles, les étudiants et les entreprises.</Link> </Typography>
            <Typography>Nous sommes soutenus dans cette démarche par des partenaires du monde tech ou universitaire et améliorons à présent à temps plein notre plateforme de mise en relation.</Typography>
            <Typography>Nous grandissons avec vous, alors n’hésitez pas à nous contacter pour nous donner votre avis ou nous faire des suggestions ! </Typography>
            <Typography>À bientôt sur la plateforme,</Typography> 
            <Typography>Toute l’équipe de Linkpick !</Typography>
          </Container>
        
        <Container>
            <Stack direction="row" spacing={2} justifyContent="space-between" alignItems="center" >
                <Card sx={{ height: '50%', display: 'flex', flexDirection: 'column', boxShadow: 0  }}  justifyContent="center" alignItems="center">
                <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
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
                        <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
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
                <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
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

    <Container>
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

    <Container>
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
    

        <Container className='partenaires'>
            <h3>Nos partenaires institutionnels</h3>
            <Stack direction="row" spacing={2} justifyContent="space-between" alignItems="center" >
            <Card sx={{ height: '100px', width: '100px', display: 'flex', flexDirection: 'column', boxShadow: 0 }}>
                <CardMedia component="img" src="/French_Tech.png" alt="frenchtech"/>
            </Card>
            <Card sx={{   height: '100px', width: '100px', display: 'flex', flexDirection: 'column', boxShadow: 0  }}>
                <CardMedia component="img" src="/france-relance.jpg" alt="france-relance"/>
            </Card>
            <Card sx={{  height: '150px', width: '150px', display: 'flex', flexDirection: 'column', boxShadow: 0  }}>
                <CardMedia component="img" src="/initiative.png" alt="initiative"/>
            </Card>
            <Card sx={{ height: '100px', width: '100px', display: 'flex', flexDirection: 'column', boxShadow: 0  }}>
                <CardMedia component="img" src="/provence_promotion.jpeg" alt="provence-promotion"/>
            </Card>
            <Card sx={{ height: '150px', width: '150px', display: 'flex', flexDirection: 'column', boxShadow: 0  }}>
                <CardMedia component="img" src="/accelerateur.png" alt="accelerateur"/>
            </Card>
             
            </Stack>
        </Container>
  
    

        
        <Container>
        <h2>Préinscrivez vous sans plus tarder</h2>
         <Stack direction="row" spacing={2}>
            <Card sx={{ height: '50%', display: 'flex', flexDirection: 'column' }}>
                <CardMedia component="img" src="/ecole_img.png" alt="ecole"/>
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2">
                    Je suis une école
                    </Typography>
                    <Typography>
                    Je veux trouver des étudiants, des écoles partenaires ou en savoir plus.
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button variant="contained" size="small">En savoir +</Button>
                  </CardActions>
                </Card>

       
                <Card sx={{ height: '50%', display: 'flex', flexDirection: 'column' }}>
                  <CardMedia component="img" src="/etudiant_img.png" alt="etudiant"/>
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2">
                    Je suis un étudiant                    
                    </Typography>
                    <Typography>
                    Je veux trouver un stage, une alternance ou une école.
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button variant="contained" size="small">Se préinscrire</Button>
                  </CardActions>
                </Card>

                <Card sx={{ height: '50%', display: 'flex', flexDirection: 'column' }} >
                   <CardMedia component="img" src="/recruteur_img.png" alt="recruteur"/>
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2">
                    Je suis un recruteur                
                    </Typography>
                    <Typography>
                    Je veux trouver un stage, une alternance ou une école.
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button variant="contained" size="small">Se préinscrire</Button>
                  </CardActions>
                </Card>
        </Stack>
      </Container>
 
      </main>

    </div>
  )
}
