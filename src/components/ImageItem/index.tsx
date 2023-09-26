import React from 'react'
import { Container } from './styles'

export type ImageItemProps = {
  path: string
}

const ImageItem: React.FC<ImageItemProps> = (props) => {
  const { path } = props
  const img = new Image()
  img.src = require(`../../assets/${path}`)

  return <Container path={path} scaled={img.height > 140 || img.width > 140} />
}

export default ImageItem
