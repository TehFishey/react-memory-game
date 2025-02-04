import React from 'react'
import { ChoiceButton, DificultyName, NumberOfCards } from './styles'

export type DificultyItemProps = {
  name: string
  numOfCards: number
  className?: string
  isSelected?: boolean
  onClick?: () => void
}

const DificultyItem: React.FC<DificultyItemProps> = (props) => {
  const { name, numOfCards, className, onClick, isSelected = false } = props

  return (
    <ChoiceButton
      className={className}
      isSelected={isSelected}
      onClick={onClick}
    >
      <DificultyName>{name}</DificultyName>
      <NumberOfCards>{numOfCards}</NumberOfCards>
    </ChoiceButton>
  )
}

export default DificultyItem
