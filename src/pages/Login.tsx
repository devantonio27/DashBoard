import {
  BannerImage,
  FormComponent,
  Logo,
  StyledH1,
  StyledP,
} from '@/components'
import { pxToRem } from '@/utils'
import { Box, Container } from '@mui/material'

function Login() {
  return (
    <Box sx={{ display: 'flex', height: '100vh' }}>
      <Box
        sx={{
          width: { xs: '100%', sm: '50%' },
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Container maxWidth="sm">
          <Box sx={{ marginBottom: pxToRem(24) }}>
            <Logo height={41} width={100} />
          </Box>
          <Box sx={{ marginBottom: pxToRem(24) }}>
            <StyledH1>Bem-vindo</StyledH1>
            <StyledP>Digite sua senha e email para logar.</StyledP>
          </Box>

          <FormComponent
            inputs={[
              { type: 'email', placeholder: 'Email' },
              { type: 'password', placeholder: 'Senha' },
            ]}
            buttons={[
              {
                className: 'primary',
                type: 'submit',
                children: 'Login',
              },
            ]}
            message={{
              msg: 'Sucesso!!!',
              type: 'success',
            }}
          />
        </Container>
      </Box>
      <Box
        sx={{
          display: { xs: 'none', sm: 'block' },
          width: '50%',
          height: '100%',
        }}
      >
        <BannerImage />
      </Box>
    </Box>
  )
}

export default Login
