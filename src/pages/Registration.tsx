import {
  BannerImage,
  FormComponent,
  Logo,
  StyledH1,
  StyledP,
  StyledUl,
} from '@/components'
import { Box, Container } from '@mui/material'
import { pxToRem } from '@/utils'

function Registration() {
  return (
    <>
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
              <StyledH1>Faça seu cadastro</StyledH1>
              <StyledP>Primeiro, diga-nos quem você é.</StyledP>
              <StyledUl>
                <li> 8 e 16 caracteres;</li>
                <li>Pelo menos uma letra maiúscula;</li>
                <li>Pelo menos um caractere especial;</li>
                <li>Pelo menos um número.</li>
              </StyledUl>
            </Box>
            <FormComponent
              inputs={[
                { type: 'email', placeholder: 'Email' },
                { type: 'password', placeholder: 'Senha' },
              ]}
              buttons={[
                { className: 'primary', type: 'submit', children: 'Login' },
              ]}
              message={{
                msg: 'Erro!!!',
                type: 'error',
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
    </>
  )
}

export default Registration
