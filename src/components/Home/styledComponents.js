import styled from 'styled-components'

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  max-height: 100%;
  justify-content: center;
  align-items: flex-start;
  background-color: #152850;
`

export const NameContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  background-image: url('https://assets.ccbp.in/frontend/react-js/music-playlist/music-playlist-Edsheeran-bg.png');
  background-size: cover;
  height: 50vh;
  width: 100%;
  object-fit: fill;
`

export const HeadingN = styled.h1`
  font-weight: 500;
  font-size: 35px;
  color: #ffffff;
  margin-left: 100px;
`
export const ParaN = styled.p`
  font-size: 28px;
  color: #ffffff;
  margin-left: 100px;
`

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  height: 90vh;
`
export const HSContainer = styled.div`
  display: flex;
  justify-content: space-between;
`

export const Heading = styled(HeadingN)`
  font-size: 28px;
  margin-left: 60px;
`

export const SearchContainer = styled.div`
  padding: 15px;
  display: flex;
  border-color: #ffffff;
  width: 250px;
`

export const Input = styled.input`
  border-color: #ffffff;
  background-color: transparent;
`

export const Button = styled.button`
  background-color: transparent;
  border-color: transparent;
  cursor: pointer;
  color: #ffffff;
  height: 50px;
`
export const TrackItemsContainer = styled.ul`
  display: flex;
  flex-direction: column;
  list-style-type: none;
  overflow-x: scroll;
  overflow-y: hidden;
`

export const NoTracks = styled(HeadingN)`
  margin: auto;
`
