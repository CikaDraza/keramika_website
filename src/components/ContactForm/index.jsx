import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import EmailIcon from '@mui/icons-material/Email';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { styled } from '@mui/material/styles';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import Stack from '@mui/material/Stack';
import ChipsArray from '../ChipsArray';
import FacebookSvg from '../Icons/Facebook';
import Link from 'next/link';
import YouTubeSvg from '../Icons/YouTube';
import InstaSvg from '../Icons/Insta';
import Viber from '../Icons/Viber';

const Input = styled('input')({
  display: 'none',
});

const theme = createTheme({
  palette: {
    primary: {
      blue: '#1D3557',
      main: '#FF810D',
      contrastText: '#fff',
      subText: 'rgba(255,255,255,.65)'
    }
  }
});

const UlComponent = styled('ul')(({ theme }) => ({
  color: theme.palette.primary.contrastText,
  padding: '65px 60px 0px',
  '& > li': {
    margin: '0 0 35px',
    lineHeight: '35px',
    color: theme.palette.primary.subText,
    fontSize: '18px',
    fontWeight: 400
  }
}))
const StrongComponent = styled('strong')(({theme}) => ({
  position: 'relative',
  fontSize: '30px',
  fontWeight: 600,
  paddingLeft: '20px',
  color: theme.palette.primary.contrastText,
  '&:before': {
    content: '""',
    position: 'absolute',
    left: 0,
    top: 0,
    height: '34px',
    width: '5px',
    backgroundColor: theme.palette.primary.main
  }
}))

const UlSocialIcons = styled('ul')(({ theme }) => ({
  padding: '0 65px 60px',
  display: 'flex',
  alignItems: 'center',
  '& li': {
    fontSize: '18px',
    fontWeight: 400,
    '& svg': {
      path: {
        fill: theme.palette.primary.subText,
      }
    },
    '& svg:hover': {
      path: {
        fill: theme.palette.primary.main
      }
    }
  },
  '& > li:not(:first-child)': {
    marginLeft: '22px'
  }
}))

export default function ContactForm({ match }) {
  const [value, setValue] = React.useState('');
  const [error, setError] = React.useState(false);
  const [selectedFile, setSelectedFile] = React.useState();
	const [isFilePicked, setIsFilePicked] = React.useState(false);
  const regex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

  const handleChange = (event) => {
    console.log(event.target.value);
    if(event.target.name !== '' ) {
      setError(true);
    }else {
      setError(false);
    }
  };

  const handleUploadFile = (e) => {
    setSelectedFile(e.target.files[0]);
    setIsFilePicked(true);
  }
  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   const data = new FormData(event.currentTarget);
  //   const images = event.currentTarget.files[0];
  //   // eslint-disable-next-line no-console
  //   console.log({
  //     email: data.get('email'),
  //     name: data.get('name'),
  //     phone: data.get('phone'),
  //     address: data.get('location'),
  //     image: data.append('images', images)
  //   });
  // };

  return (
    <ThemeProvider theme={theme}>
      <Grid container component="main" sx={{ height: '100%' }}>
        <CssBaseline />
        <Grid item xs={12} sm={8} component={Paper} elevation={0} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'left',
            }}
          >
              <Avatar sx={{ mb: 5, bgcolor: 'primary.main' }}>
                <EmailIcon />
              </Avatar>
              <h2 className="contact-form-title">
                Kontakt Forma
              </h2>
              <div className="container">
                  <form className="form" autoComplete="off" name="contact" method="POST" data-netlify-honeypot="bot-field" data-netlify="true" component="form" encType="multipart/form-data">
                    <input type="hidden" name="form-name" value="contact" />
                    <div style={{display: 'none'}}>
                      <input name="bot-field" />
                    </div>
                    <div className="input-field">
                      <input id="name-field" type="text" name="name" onChange={handleChange}/>
                      <label className={error && 'active-label'} htmlFor="name-field">Ime</label>
                  
                    </div>
                    <div className="input-field">
                      <input type="email" onChange={handleChange} name="_replyto" id="email" className="email-field" required/>
                      <label className={error && 'active-label'} htmlFor="email">Email</label>
                    </div>
                    <div className="input-field">
                      <input type="tel" id="phone" onChange={handleChange} name="phone"/>
                      <label className={error && 'active-label'} htmlFor="phone">Mobilni</label>
                     
                    </div>
                    <div className="input-field">
                      <textarea cols="22" rows="5" onChange={handleChange} type="text" id="message" name="message"></textarea>
                      <label className={error && 'active-label'} htmlFor="message">Poruka</label>
                    </div>
                    <div className="input-field">
                      <input type="submit" value="Pošalji" className="btn"/>
                    </div>
                    <div className="input-field">
                      <input accept="image/jpg image/png image/jpeg" type="file" name="attach" />
                    </div>
                  </form>
                {/*<form autoComplete="off" name="contact" method="POST" data-netlify-honeypot="bot-field" data-netlify="true" component="form" encType="multipart/form-data">
                <input type="hidden" name="form-name" value="contact" />
                <div style={{display: 'none'}}>
                  <input name="bot-field" />
                </div>
                  <label htmlFor="fname">Ime</label>
                  <input type="text" id="fname" name="firstname" placeholder="Vase ime.."/>
              
                  <label htmlFor="lname">Prezime</label>
                  <input type="text" id="lname" name="lastname" placeholder="Vase prezime.."/>

                  <label htmlFor="email">Email</label>
                  <input type="email" id="email" name="email" placeholder="Email.."/>
              
                  <label htmlFor="subject">Poruka</label>
                  <textarea id="subject" name="subject" placeholder="Opis projekta.." style={{height: "200px"}}></textarea>
              
                  <input type="submit" value="Submit" />
                  <input accept="image/jpg image/png image/jpeg" id="file" type="file" multiple name="file"  />
          </form>*/}
              </div>
     {    /*     <Box noValidate autoComplete="off" name="contact" method="POST" data-netlify-honeypot="bot-field" data-netlify="true" component="form" enctype="multipart/form-data" sx={{ mt: 10 }}>
              <input type="hidden" name="form-name" value="contact" />
              <Box sx={{display: 'none'}}>
                <input name="bot-field" />
              </Box>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    autoComplete="given-name"
                    name="firstName"
                    required
                    fullWidth
                    id="firstName"
                    label="Ime"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    fullWidth
                    id="lastName"
                    label="Prezime"
                    name="lastName"
                    autoComplete="family-name"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    error={error}
                    required
                    fullWidth
                    id="email"
                    label="Email Adresa"
                    name="email"
                    value={value}
                    onChange={handleChange}
                    autoComplete="email"
                    helperText={error && "Unesite validnu email adresu"}
                  />
                </Grid>
                <Grid item xs={12}>
                <TextField
                  id="outlined-multiline-flexible"
                  label="Poruka"
                  multiline
                  fullWidth
                  name='message'
                  maxRows={12}
                />
                </Grid>
                <Grid item xs={12}>
                  <FormControlLabel
                    control={<Checkbox value="allowExtraEmails" color="primary" />}
                    label="Želim da dobijam inspiraciju, marketinške promocije i ažuriranja putem e-pošte."
                  />
                </Grid>
              </Grid>
              <Button
                disabled={error && true}
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Pošalji
              </Button>
              <Grid container>
                <Grid item xs>
                  <Stack direction="row" alignItems="center" spacing={2}>
                    <label htmlFor="file">
                      <Input onChange={handleUploadFile} accept="image/jpg image/png image/jpeg" id="file" type="file" name="file" />
                      <Button id='file' variant="contained" component="span" startIcon={<PhotoCamera />}>
                          Upload
                      </Button>
                    </label>
                  </Stack>
                </Grid>
              </Grid>
            </Box>
          <ChipsArray selectedFile={isFilePicked && selectedFile}/> */}
          </Box>
        </Grid>
        <Grid
          item
          xs={12}
          sm={4}
          sx={match ? { m: 0, ml: 0, mr: 0,
            backgroundColor: (t) =>
              t.palette.primary.blue
           } : {
             m: 10, ml: 5, mr: -5,
            backgroundColor: (t) =>
              t.palette.primary.blue
          }}
        >
          <UlComponent>
            <li>
              <StrongComponent>Adresa</StrongComponent><br/>
              Stevana Sremca 89k, Sremska Mitrovica 22000, Srbija
            </li>
            <li>
              <StrongComponent>Telefon</StrongComponent><br/>
              +381 (0) 60 53 54 777<br />
              <span style={{display: 'flex', alignItems: 'center'}}><Viber style={{marginRight: '10px'}} width={20} height={20} fill={'#fff'}/> +381 (0) 60 53 54 777</span>
            </li>
            <li>
              <StrongComponent>Email</StrongComponent><br/>
              nemanjazivojinov1@gmail.com
            </li>
            <li>
              <StrongComponent>Radno vreme</StrongComponent><br/>
              Ponedeljak - Petak<br/>
              09.00 - 17.00<br/>
              Subota - Nedelja<br/>
              Ne radimo
            </li>
          </UlComponent>
          <UlSocialIcons>
            <li>
               <Link  href="https://www.facebook.com/profile.php?id=100063739952191" passHref>
                  <a target="_blank">
                    <FacebookSvg className="nav__icon--facebook" width={20} height={20} />                 
                  </a>
                </Link>
            </li>
            <li>
                <Link href="https://www.youtube.com/channel/UC3u9C_wdhIn81JGnrmMzWrA" passHref>
                  <a target="_blank">
                    <YouTubeSvg className="nav__icon--youtube" width={25} height={25} />
                  </a> 
                </Link>
            </li>
            <li>
                <Link href="https://www.instagram.com/zivojinovkeramika/">
                  <a target="_blank">
                    <InstaSvg className="nav__icon--insta" width={20} height={20} />
                  </a>
                </Link>
            </li>
          </UlSocialIcons>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}