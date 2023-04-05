import styled from 'styled-components'

export const ContainerHome = styled.div`
  display: flex;
  width: 90vw;
  max-width: 1300px;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
`
export const Header = styled.div`
  width: 100%;
  padding: 25px 0px;
  align-items: flex-start;
  h1 {
    font-size: 40px;
    margin-bottom: 20px;
  }
  a {
    margin-right: 10px;
    font-size: 16px;
    background: #dff2ef;
    padding: 10px;
    border-radius: 5px;
    font-weight: 600;
  }
`

export const Image = styled.img`
  width: 300px;
  height: auto;
`
export const ContainerImage = styled.div`
  max-width: 200px;
  max-height: 100px;
  border: 2px red solid;
`
