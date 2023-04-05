import Head from 'next/head'
import * as S from '../styles/home.styles'
import Header from 'src/componets/Header'
import SpLocation from 'src/componets/SpLocation'

type Props = {
  datajson: {
    coord: {
      lat: number
      lon: number
    }
  }
}

function hoe() {
  if (typeof navigator !== 'undefined' && typeof navigator.geolocation !== 'undefined') {
    navigator.geolocation.getCurrentPosition(function (position) {
      const latitude = position.coords.latitude
      const longitude = position.coords.longitude
      // Use a latitude e longitude para exibir a localização do usuário
      console.log(latitude, longitude)
    })
  } else {
    // Navegador não suporta a API de Geolocalização
  }
}

hoe()

export default function Home({ datajson }: Props) {
  return (
    <>
      <Head>
        <title>comparador</title>
        <meta name="description" content="Inicio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <S.ContainerHome>
        <Header />
        <SpLocation />
      </S.ContainerHome>
    </>
  )
}

export async function getStaticProps() {
  const data = await fetch(
    'https://api.openweathermap.org/data/2.5/weather?q=curitiba&appid=1128cc452a9e81897f43e79194e695b5&units=metric&lang=pt_br',
  )
  const datajson = await data.json()
  console.log(datajson)
  return {
    props: {
      datajson: datajson,
    },
  }
}
