import React from 'react'
import Header from 'src/componets/Header'
import { Chart } from 'react-google-charts'
import * as S from '../styles/home.styles'

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

function page2() {
  return (
    <S.ContainerHome>
      <Header />

      <Chart
        chartType="ColumnChart"
        data={data}
        width="100%"
        height="500px"
        options={options}
        legendToggle
      />
    </S.ContainerHome>
  )
}

export default page2

//api https://api.openweathermap.org/data/2.5/weather?q=curitiba&appid=1128cc452a9e81897f43e79194e695b5&units=metric&lang=pt_br
