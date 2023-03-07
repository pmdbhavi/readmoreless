import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 50px;
  font-family: 'Roboto';
`

export const Heading = styled.h1`
  color: #1e293b;
  font-weight: bold;
  font-size: 30px;
  font-family: 'Roboto';
`

export const Para = styled.p`
  color: #334155;
  font-size: 15px;
  width: 50vw;
  text-align: center;
`

export const Image = styled.img`
  border-radius: 5px;
  height: 50vh;
  width: 50vw;
`

export const Button = styled.button`
  background-color: #1f81ff;
  color: white;
  border-width: 0px;
  border-radius: 10px;
  width: 100px;
  height: 50px;
`
