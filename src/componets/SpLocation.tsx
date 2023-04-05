import React, { useEffect, useState } from 'react'
import * as S from '../styles/componets/splocation.styles'

const SpLocation = () => {
  const [data, setData] = useState('')

  useEffect(() => {
    if (
      typeof navigator !== 'undefined' &&
      typeof navigator.geolocation !== 'undefined'
    ) {
      const dataHoraAtual = new Date().toLocaleString('pt-BR')
      setData(dataHoraAtual)
    }
  }, [])
  return (
    <S.Container>
      <S.OneBox>
        <S.form>
          <label htmlFor="pesquisa">Sua Cidade</label>
          <input type="text" name="search" id="pesquisa" placeholder="São Paulo" />
        </S.form>
        <h2>{data}</h2>
      </S.OneBox>
      <S.SecondBox></S.SecondBox>
    </S.Container>
  )
}

export default SpLocation
