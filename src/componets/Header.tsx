import React from 'react'
import * as S from '../styles/home.styles'
import Link from 'next/link'

function Header() {
  return (
    <S.Header>
      <h1>Clima Dash</h1>
      <Link href="/">Clima</Link>
      <Link href="/page2">Comparar</Link>
    </S.Header>
  )
}

export default Header
