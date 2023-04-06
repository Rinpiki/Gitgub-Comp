import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  width: 90vw;
  max-width: 1300px;
  flex-direction: center;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
`
export const Data = styled.p`
  width: 155px;
  height: 17px;
  color: #b0b8be;
  font-size: 14px;
  font-weight: 600;
  margin-left: 5px;
  margin-top: 20px;
`

export const OneBox = styled.div`
  display: flex;
  margin: 0 auto;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  margin-top: 20px;
  background: #f2f8f8;
`
export const SecondBox = styled.div``
export const form = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  label {
    font-weight: 800;
  }
  input {
    padding: 8px 20px;
    border: #2c404d 2px solid;
    border-radius: 5px;
    outline: none;
    width: 120px;
    font-weight: 600;
    margin-left: 10px;
  }
`
export const TempImg = styled.div`
  margin-top: 10px;
  display: flex;
  align-items: center;
  font-size: 25px;
  font-weight: 800;
  p {
    margin-left: 10px;
    color: black;
  }
`
export const InfoTemp = styled.div`
  display: flex;
  flex-direction: column;
  align-content: center;
`
export const Clouds = styled.span`
  font-size: 14px;
  font-weight: 800;
  color: #1e2d3e;
  background: #def2ee;
  padding: 5px 10px;
  border-radius: 5px;
  margin-top: 15px;
`
