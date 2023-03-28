import Head from 'next/head'
import * as S from '../styles/home'

type Props = {
  img: string
}

export default function Home(props: Props) {
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
        <S.ContainerImage>
          <S.Image src={props.img} alt="imagem de fora" />
        </S.ContainerImage>
      </S.ContainerHome>
    </>
  )
}

export async function getStaticProps() {
  const img =
    'https://images.unsplash.com/photo-1647891938250-954addeb9c51?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80'

  return {
    props: {
      img,
    },
  }
}
