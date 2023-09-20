import React from 'react'
import { Container } from './styles'

export type ChoiceButtonItemProps = {
  className?: string
  isSelected?: boolean
  onClick?: () => void
  children?: React.ReactNode
}

const ChoiceButtonItem: React.FC<ChoiceButtonItemProps> = (props) => {
  const { className, isSelected = false, onClick, children } = props

  return (
    <Container className={className} isSelected={isSelected} onClick={onClick}>
      {children}
    </Container>
  )
}

export default ChoiceButtonItem
