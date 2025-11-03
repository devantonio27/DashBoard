import { AvatarsList, CardComponent, Header } from '@/components'
import { Container } from '@mui/material'
import { currencyConverter } from '@/utils'

function Home() {
  const mockListData = [
    {
      avatar: 'avatar.svg',
      name: 'Nome Sobrenome 1',
      subtitle: currencyConverter(1234.54),
    },
    {
      avatar: 'avatar.svg',
      name: 'Nome Sobrenome 2',
      subtitle: currencyConverter(2134.54),
    },
    {
      avatar: 'avatar.svg',
      name: 'Nome Sobrenome 3',
      subtitle: currencyConverter(3214.54),
    },
  ]

  return (
    <>
      <Header />
      <Container>
        <CardComponent>Card</CardComponent>
        <CardComponent>
          <AvatarsList listData={mockListData} />
        </CardComponent>
      </Container>
    </>
  )
}

export default Home
