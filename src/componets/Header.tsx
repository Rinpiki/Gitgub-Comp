import React from 'react'
import * as S from '../styles/home'
import Link from 'next/link'

function Header() {
  return (
    <S.Header>
      <h1>Github Comp</h1>
      <Link href="/">Home</Link>
      <Link href="/page2">Page2</Link>
    </S.Header>
  )
}

export default Header
