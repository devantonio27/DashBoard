import { BannerImage } from '@/components'
import { Box, Container } from '@mui/material'

function Login() {
  return (
    <Box sx={{ display: 'flex', height: '100vh' }}>
      <Box
        sx={{
          width: '50%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Container maxWidth="sm">
          <h1>LOGIN</h1>
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
