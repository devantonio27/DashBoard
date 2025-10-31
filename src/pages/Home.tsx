import { CardComponent, Header } from '@/components'
import { Container } from '@mui/material'

function Home() {
  return (
    <>
      <Header />
      <Container>
        <CardComponent>Card</CardComponent>
      </Container>
    </>
  )
}

export default Home
