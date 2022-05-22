import { useEffect, useState } from 'react';
import {
  Avatar, Button, CssBaseline, FormControlLabel, Checkbox, Link, Grid,
  Alert, Box, createTheme, ThemeProvider, Typography, Container
} from '@mui/material'
import AccountCircle from '@mui/icons-material/AccountCircle';
import { useFormik } from 'formik';
import Copyright from '../Components/Copyright'
import CssTextField from '../Components/CssTextField'
import validationSchemaSignIn from '../Validators/validationSchemaSignIn'
import backendConnection from '../Services/connectionserver';

const theme = createTheme();

export default function SignIn() {
  const [serverCodeFeedback, setServerCodeFeedback] = useState<number>(0)
  useEffect(() => {
    document.title = 'Login'
  })

  useEffect(() => {
    setTimeout(() => {
      setServerCodeFeedback(0)
    }, 3000)
  }, [serverCodeFeedback])

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: validationSchemaSignIn,
    onSubmit: (values, { resetForm }) => {
      const connection = '/login'
      const userData = {
        name: values.email,
        password: values.password,
      }
      backendConnection(userData, connection, setServerCodeFeedback)
      resetForm({
        values: { email: '', password: '' },
      })
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 5, bgcolor: '#36a9e0' }}>
            <AccountCircle />
          </Avatar>
          <Typography component="h1" variant="h5" sx={{ color: '#333' }}>
            Entrar
          </Typography>
          <Box component="form" onSubmit={formik.handleSubmit} noValidate sx={{ mt: 3 }}>
            <CssTextField
              margin="normal"
              required
              fullWidth
              value={formik.values.email}
              id="email"
              label="Endereço de E-mail"
              name="email"
              autoComplete="email"
              autoFocus
              sx={{
                "&.Mui-focused fieldset": {
                  borderColor: "white"
                }
              }}
              error={formik.touched.email && Boolean(formik.errors.email)}
              helperText={formik.touched.email && formik.errors.email}
              onChange={formik.handleChange}
            />
            <CssTextField
              margin="normal"
              required
              fullWidth
              value={formik.values.password}
              name="password"
              label="Senha"
              type="password"
              id="password"
              autoComplete="current-password"
              error={formik.touched.password && Boolean(formik.errors.password)}
              helperText={formik.touched.password && formik.errors.password}
              onChange={formik.handleChange}
            />
            {
              serverCodeFeedback === 200 ? <Alert severity="success">Login com sucesso</Alert> : null
            }
            {
              serverCodeFeedback === 404 ? <Alert severity="error">E-mail ou senha incorreto</Alert> : null
            }
            {
              formik.errors.password &&
              <Grid item>
                <Link href="passwordrecovery" variant="body2" sx={{ color: '#36a9e0' }}>
                  {"Esqueceu sua senha?"}
                </Link>
              </Grid>
            }
            <FormControlLabel
              sx={{ mt: 2 }}
              control={<Checkbox value="remember" color="primary" />}
              label="Lembrar-me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{
                mt: 3,
                mb: 2,
                bgcolor: 'transparent',
                color: '#333',
                border: '2px solid #36a9e0',
                boxShadow: 'none',
                '&:hover': {
                  bgcolor: '#f1f1f1',
                  boxShadow: 'none'
                }
              }}
            >
              Entrar
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="usernamerecovery" variant="body2" sx={{ color: '#36a9e0' }}>
                  Esqueceu seu email?
                </Link>
              </Grid>
              <Grid item>
                <Link href="signup" variant="body2" sx={{ color: '#36a9e0' }}>
                  {"Criar conta"}
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