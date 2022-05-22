import { useEffect } from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import AccountCircle from '@mui/icons-material/AccountCircle';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Copyright from '../Components/Copyright'
import CssTextField from '../Components/CssTextField'
import { useFormik } from 'formik';
import validationSchemaUserRecovery from '../Validators/validationSchemaUserRecovery'

const theme = createTheme();

export default function UsernameRecovery() {
  useEffect(() => {
    document.title = 'Login'
  })

  const formik = useFormik({
    initialValues: {
      email: '',
    },
    validationSchema: validationSchemaUserRecovery,
    onSubmit: (values) => {
      console.log(values);
      
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="sm">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
          }}
        >
          <Avatar sx={{ m: 5, bgcolor: '#36a9e0' }}>
            <AccountCircle />
          </Avatar>
          <Typography component="h1" variant="h5" sx={{color: '#333'}}>
            Encontre seu E-mail
          </Typography>
          <Typography component="h2" variant="h6" sx={{color: '#333', m: 2, textAlign: 'center'}}>
            Digite seu e-mail de recuperação
          </Typography>
          <Box component="form"onSubmit={formik.handleSubmit} noValidate sx={{ mt: 3, width: '72%' }}>
            <CssTextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Endereço e-mail"
              name="email"
              autoComplete="email"
              autoFocus
              sx={{"&.Mui-focused fieldset": {
                borderColor: "white"
              }}}
              error={formik.touched.email && Boolean(formik.errors.email)}
              helperText={formik.touched.email && formik.errors.email}
              onChange={formik.handleChange}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2, bgcolor: 'transparent', color: '#333', border: '2px solid #36a9e0', boxShadow: 'none', '&:hover': { bgcolor: '#f1f1f1', boxShadow: 'none' } }}
            >
              Proximo
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="signin" variant="body2" sx={{color: '#36a9e0'}}>
                  Faça o login
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </ThemeProvider>
  );
}