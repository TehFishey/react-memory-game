import React from 'react'
import { Container, Img } from './styles'

export type ImageItemProps = {
  path: string
}

const ImageItem: React.FC<ImageItemProps> = (props) => {
  const { path } = props

  return (
    <Container>
      <Img src={require(`../../assets/${path}`)} />
    </Container>
  )
}

export default ImageItem
