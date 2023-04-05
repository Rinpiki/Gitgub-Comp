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
export const OneBox = styled.div`
  h2 {
    font-size: 14px;
    font-weight: 600;
    margin-left: 5px;
    margin-top: 30px;
  }
`
export const SecondBox = styled.div``
export const form = styled.form`
  margin-top: 20px;
  margin-left: 5px;
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
