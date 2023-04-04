import React from 'react'
import Header from 'src/componets/Header'
import { Chart } from 'react-google-charts'
import * as S from '../styles/home.styles'

type Props = {
  img: string
}

const options = {
  title: 'clima data',
  subtitle: 'temperatura, humidade',
  backgroundColor: '#FFFEFF', // Define a cor de fundo
  color: '#2C404D',
  colors: ['#F74143', '#5D5DB5', '#F5A35E'],
}

export const data = [
  ['Year', 'Sales', 'Expenses', 'Profit'],
  ['2014', 1000, 400, 200],
  ['2015', 1170, 460, 250],
  ['2016', 660, 1120, 300],
  ['2017', 1030, 540, 350],
]

function page2(props: Props) {
  return (
    <S.ContainerHome>
      <Header />

      <Chart
        chartType="ColumnChart"
        data={data}
        width="100%"
        height="400px"
        options={options}
        legendToggle
      />
    </S.ContainerHome>
  )
}

export default page2

export async function getStaticProps() {
  const img =
    'https://images.unsplash.com/photo-1553531889-e6cf4d692b1b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'

  return {
    props: {
      img,
    },
  }
}
