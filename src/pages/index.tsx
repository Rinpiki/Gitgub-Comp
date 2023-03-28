import Head from 'next/head'
import * as S from '../styles/home'

export default function Home() {
  return (
    <>
      <Head>
        <title>comparador</title>
        <meta name="description" content="Inicio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <S.ContainerHome>
        <S.Header>
          <h1>Github Comp</h1>
          <p>ooooo</p>
        </S.Header>
      </S.ContainerHome>
    </>
  )
}
