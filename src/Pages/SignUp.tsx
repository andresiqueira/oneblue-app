import { useEffect, useState } from 'react'
import {
  Link, CssBaseline, Button, Avatar, Grid, Box, Alert, Typography,
  Container, createTheme, ThemeProvider
} from '@mui/material'
import AccountCircle from '@mui/icons-material/AccountCircle';
import CssTextField from '../Components/CssTextField'
import Copyright from '../Components/Copyright'
import validationSchemaSignUp from '../Validators/validationSchemaSignUp'
import { useFormik } from 'formik';
import backendConnection from '../Services/connectionserver'

const theme = createTheme();

export default function SignUp() {
  const [serverCodeFeedback, setServerCodeFeedback] = useState<number>(0)
  useEffect(() => {
    document.title = 'Criar conta'
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
    validationSchema: validationSchemaSignUp,
    onSubmit: (values, { resetForm }) => {
      const userData = {
        name: values.email,
        password: values.password,
      }
      const connection = '/user/cadaster'
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
            Criar conta
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
              serverCodeFeedback === 200 ? <Alert severity="success">Conta criada com sucesso</Alert> : null
            }
            {
              serverCodeFeedback === 404 ? <Alert severity="error">E-mail já cadastrado, tente outro</Alert> : null
            }
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
              Criar Conta
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="signin" variant="body2" sx={{ color: '#36a9e0' }}>
                  {"Fazer o login"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 5 }} />
      </Container>
    </ThemeProvider>
  );
}