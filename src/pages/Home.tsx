import { AvatarsList, CardComponent, CustomTable, Header } from '@/components'
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

  const mockTableData = {
    headers: ['Name', 'Email', 'Actions'],
    rows: [
      [<span>Nome 1</span>, <span>Nome1@email.com</span>, <span>ACTION</span>],
      [<span>Nome 2</span>, <span>Nome2@email.com</span>, <span>ACTION</span>],
      [<span>Nome 3</span>, <span>Nome3@email.com</span>, <span>ACTION</span>],
    ],
  }

  return (
    <>
      <Header />
      <Container>
        <CardComponent>Card</CardComponent>
        <CardComponent>
          <AvatarsList listData={mockListData} />
        </CardComponent>
        <CardComponent>
          <CustomTable
            headers={mockTableData.headers}
            rows={mockTableData.rows}
          />
        </CardComponent>
      </Container>
    </>
  )
}

export default Home
