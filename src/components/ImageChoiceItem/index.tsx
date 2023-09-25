import React from 'react'
import { ChoiceButton, DificultyName } from './styles'

export type ImageChoiceItemProps = {
  name: string
  className?: string
  isSelected?: boolean
  onClick?: () => void
}

const ImageChoiceItem: React.FC<ImageChoiceItemProps> = (props) => {
  const { name, className, onClick, isSelected = false } = props

  return (
    <ChoiceButton
      className={className}
      isSelected={isSelected}
      onClick={onClick}
    >
      <DificultyName>{name}</DificultyName>
    </ChoiceButton>
  )
}

export default ImageChoiceItem
