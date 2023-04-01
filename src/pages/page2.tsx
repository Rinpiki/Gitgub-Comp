import React from 'react'
import Header from 'src/componets/Header'
import * as S from '../styles/home'

type Props = {
  img: string
}

function page2(props: Props) {
  return (
    <S.ContainerHome>
      <Header />
      <S.Image src={props.img} alt="imagem de fora" width={196} height={294} />
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
