import styled from 'styled-components'

export const TracksContainer = styled.li`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 20px;
`

export const FirstContainer = styled.div`
  display: flex;
  flex-direction: row;
`

export const Image = styled.img`
  height: 100px;
  width: 100px;
  border-radius: 10px;
  margin: 15px;
`

export const NameTypeContainer = styled.div`
  display: flex;
  flex-direction: column;
`

export const Name = styled.h1`
  font-weight: 500;
  font-size: 24px;
  color: #ffffff;
`

export const Type = styled.p`
  font-size: 18px;
  color: #3b82f6;
`

export const Duration = styled.p`
  color: #ffffff;
  font-size: 20px;
`
export const DeleteButton = styled.button`
  background-color: transparent;
  border-color: transparent;
  cursor: pointer;
`
