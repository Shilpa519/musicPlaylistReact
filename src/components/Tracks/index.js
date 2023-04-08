import {AiOutlineDelete} from 'react-icons/ai'

import {
  TracksContainer,
  FirstContainer,
  Image,
  NameTypeContainer,
  Name,
  Type,
  Duration,
  DeleteButton,
} from './styledComponents'

const Tracks = props => {
  const {data, onDelete} = props

  const onDeleted = () => {
    onDelete(data.id)
  }

  return (
    <TracksContainer key={data.name}>
      <FirstContainer>
        <Image src={data.imageUrl} alt="track" />
        <NameTypeContainer>
          <Name>{data.name}</Name>
          <Type>{data.genre}</Type>
        </NameTypeContainer>
      </FirstContainer>

      <Duration>{data.duration}</Duration>
      <DeleteButton type="button" data-testid="delete" onClick={onDeleted}>
        <AiOutlineDelete color="white" size={23} />
      </DeleteButton>
    </TracksContainer>
  )
}

export default Tracks
