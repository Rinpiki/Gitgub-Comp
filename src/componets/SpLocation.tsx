import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import * as S from '../styles/componets/splocation.styles'
import clouds from '../../public/icons/clouds.svg'

type Props = {
  datajson: {
    coord: {
      lon: number
      lat: number
    }
    weather: {
      id: number
      main: string
      description: string
      icon: string
    }[]
    base: string
    main: {
      temp: number
      feels_like: number
      temp_min: number
      temp_max: number
      pressure: number
      humidity: number
    }
    visibility: number
    wind: {
      speed: number
      deg: number
    }
    clouds: {
      all: number
    }
    dt: number
    sys: {
      type: number
      id: number
      country: string
      sunrise: number
      sunset: number
    }
    timezone: number
    id: number
    name: string
    cod: number
  }
}

const SpLocation = (props: Props) => {
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
        <S.Data>{data}</S.Data>
        <S.TempImg>
          <Image priority src={clouds} height={62} width={62} alt="Clouds" />
          <p>{props.datajson.main.temp.toString().slice(0, 2)}°C</p>
        </S.TempImg>
        <S.InfoTemp>
          <S.Clouds>{props.datajson.weather[0].description}</S.Clouds>
        </S.InfoTemp>
      </S.OneBox>
      <S.SecondBox></S.SecondBox>
    </S.Container>
  )
}

export default SpLocation
