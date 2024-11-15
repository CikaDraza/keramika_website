import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import Paper from '@mui/material/Paper';
import TextareaAutosize from '@mui/material/TextareaAutosize';
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
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { Typography } from '@mui/material';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import Chip from '@mui/material/Chip';
import axios from 'axios';
import Snackbar from '@mui/material/Snackbar';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';

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
  '& > li:not(:first-of-type)': {
    marginLeft: '22px'
  }
}))

export default function ContactForm({ match }) {
  const [errors, setErrors] = React.useState({
    email: false,
    phone: false,
    imageLength: false
  });
  const [imgFile, setImgFile] = React.useState([]);
  const [room, setRoom] = React.useState([]);
  const formRef = React.useRef(null);
  const [open, setOpen] = React.useState(false);

  const handleChangeRoom = (event) => {
    const { target: { value } } = event;
    setRoom(typeof value === 'string' ? value.split(',') : value);
  };

  const names = [
    'Kupatilo',
    'Kuhinja',
    'Dnevna Soba',
    'Hodnik',
    'Stepeniste',
    'Terasa',
    'Trpezarija',
  ];

  const pattern_email = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  const pattern = /^0\d{8,10}$/;

  const handleClose = (event, reason) => {
    setOpen(false);
  };

  const action = (
    <IconButton
    size="small"
    aria-label="close"
    color="inherit"
    onClick={handleClose}
    >
      <CloseIcon fontSize="small" />
    </IconButton>
  );

  function handleImageChoose(e) {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onload = () => {
        setImgFile([
          ...imgFile,
          {            
            image: file,
            imageUrl: reader.result
          }
        ]);
        e.target.value = ''
    }
    reader.readAsDataURL(file);
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    const emailValue = formRef.current.querySelector('input[name="email"]');
    const firstNameValue = formRef.current.querySelector('input[name="firstName"]');
    const lastNameValue = formRef.current.querySelector('input[name="lastName"]');
    const phoneValue = formRef.current.querySelector('input[name="phone"]');
    const messageValue = formRef.current.querySelector('textarea[name="message"]');
    const subscribeValue = formRef.current.querySelector('input[name="subscription"]');

    try {
      const dataForm = new FormData(event.currentTarget);
      const formOutput = {
        email: dataForm.get('email'),
        name: dataForm.get('firstName'),
        last_name: dataForm.get('lastName'),
        phone: dataForm.get('phone'),
        room: room,
        message: dataForm.get('message'),
        image: imgFile.map(item => item.imageUrl),
        subscribe: dataForm.get('subscription'),
      }

      if(!pattern_email.test(formOutput.email)) {
        setErrors({ ...errors, email: true });
        setOpen(true);
        return;
      }
      if(!pattern.test(formOutput.phone.toString())) {
        setErrors({ ...errors, phone: true });
        setOpen(true);
        return;
      }
      if (imgFile.length > 5) {
        setErrors({ ...errors, imageLength: true });
        setOpen(true);
        return;
      }
      
      const { data } = await axios.post('/api/contact', formOutput);
      setErrors({ ...errors, email: false, phone: false, imageLength: false });
      setImgFile(() => []);
      setRoom(() => []);
      emailValue.value = '';
      firstNameValue.value = '';
      lastNameValue.value = '';
      phoneValue.value = '';
      messageValue.value = '';
      subscribeValue.checked = false;
      setOpen(true);
    } catch (error) {
      console.log(error);
    }
  };  

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
              <Box ref={formRef} onSubmit={handleSubmit} method="POST" component="form" sx={{ mt: 10 }}>
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
                    error={errors.email}
                    required
                    fullWidth
                    id="email"
                    label="Email Adresa"
                    name="email"
                    autoComplete="email"
                    helperText={errors.email && "Unesite validnu email adresu"}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    error={errors.phone}
                    required
                    type='number'
                    fullWidth
                    id="phone"
                    label="Telefon"
                    name="phone"
                    autoComplete="phone"
                    helperText={errors.phone && "Unesite validan telefon"}
                  />
                </Grid>
                <Grid item xs={12}>
                  <FormControl fullWidth>
                    <InputLabel id="demo-multiple-chip-label">Prostorije</InputLabel>
                    <Select
                      labelId="demo-multiple-chip-label"
                      id="demo-multiple-chip"
                      multiple
                      value={room}
                      onChange={handleChangeRoom}
                      input={<OutlinedInput id="select-multiple-rooms" label="Prostorije" />}
                      renderValue={(selected) => (
                        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                          {selected.map((value) => (
                            <Chip key={value} label={value} />
                          ))}
                        </Box>
                      )}
                    >
                      {names.map((name) => (
                        <MenuItem
                          key={name}
                          value={name}
                        >
                          {name}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs={12}>
                <TextareaAutosize
                  name="message"
                  id='message'
                  required
                  placeholder="Poruka"
                  maxRows={10}
                  minRows={4}
                  aria-label="textarea-message"
                  style={{ width: '100%', resize: 'vertical', padding: '8px' }}
                />
                </Grid>
                <Grid item xs={12}>
                  <FormControlLabel
                    control={<Checkbox value="allowExtraEmails" name='subscription' color="primary" />}
                    label="Želim da dobijam inspiraciju, marketinške promocije i ažuriranja putem e-pošte."
                  />
                </Grid>
              </Grid>
              <Grid sx={{py: 3}} container spacing={3}>
                <Grid item xs={12}>
                  <Typography component="p" variant='h6' sx={{pb: 3}}>Posaljite slike vasih prostorija {'(do pet fotografija)'}</Typography>
                  <Stack direction="row" alignItems="center" spacing={2}>
                    <Box component="label" onChange={handleImageChoose} htmlFor="file">
                      <Button variant="contained" component="span" startIcon={<PhotoCamera />}>
                          Upload
                      </Button>
                      <Box sx={{display: 'none'}} accept="image/jpg image/png image/jpeg" component="input" type="file" name="file" id="file"/>
                    </Box>
                  </Stack>
                  <ChipsArray selectedFile={imgFile} setImgFile={setImgFile} />
                </Grid>
              </Grid>
              <Button
                disabled={imgFile.length > 5 && true}
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Pošalji
              </Button>
            </Box>
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
             m: 10, ml: 0, mr: 0,
            backgroundColor: (t) =>
              t.palette.primary.blue
          }}
        >
          <UlComponent>
            <li>
              <StrongComponent>Adresa</StrongComponent><br/>
              Miloša Obilica 55, Sremska Mitrovica 22000, Srbija
            </li>
            <li>
              <StrongComponent>Telefon</StrongComponent><br/>
              +381 (0) 62 201 787<br />
              <span style={{display: 'flex', alignItems: 'center'}}><Viber style={{marginRight: '10px'}} width={20} height={20} fill={'#fff'}/> +381 (0) 62 201 787</span>
            </li>
            <li>
              <StrongComponent>Email</StrongComponent><br/>
              info@keramicar-lale.online
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
               <Link  href="#" passHref>
                  <FacebookSvg className="nav__icon--facebook" width={20} height={20} />                 
                </Link>
            </li>
            <li>
                <Link href="https://www.youtube.com/channel/UCwIso2xGZwgN3lgjP8oMPVw" passHref>
                  <YouTubeSvg className="nav__icon--youtube" width={25} height={25} />
                </Link>
            </li>
            <li>
                <Link href="#" passHref>
                  <InstaSvg className="nav__icon--insta" width={20} height={20} />
                </Link>
            </li>
          </UlSocialIcons>
        </Grid>
      </Grid>
      <Stack spacing={2}>
      <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
        <Snackbar
          sx={{ flexGrow: 0 }}
          onClose={handleClose}
          open={open}
          action={action}
          message={errors.email ? 'Unesite validnu email adresu' : errors.phone ? 'Unesite validan telefon' : errors.imageLength ? 'Maksimalan broj slika je 5' : 'Poruka je uspesno poslata'}
        />
      </Snackbar>
    </Stack>
    </ThemeProvider>
  );
}