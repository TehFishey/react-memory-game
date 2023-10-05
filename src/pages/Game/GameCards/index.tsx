import React, { useContext, useEffect } from 'react'
import GameContext from '../GameContext'
import { Container, CardItem, FlexElement } from './styles'
import ImageItem from '../../../components/ImageItem'

const GameCards: React.FC = () => {
  const {
    firstSelectedCard,
    setFirstSelectedCard,
    secondSelectedCard,
    setSecondSelectedCard,
    iconFoundList,
    setIconFoundList,
    iconList,
    isPaused,
    isCheckingCards,
    setIsCheckingCards,
    difficulty,
    matchAttempts,
    setMatchAttempts,
  } = useContext(GameContext)

  const onSelectCard = (index: number) => (): void => {
    if (isCheckingCards) return
    if (firstSelectedCard === -1) setFirstSelectedCard(index)
    else setSecondSelectedCard(index)
  }

  const onEndCHeckingSelectedCards = (): void => {
    setFirstSelectedCard(-1)
    setSecondSelectedCard(-1)
    setIsCheckingCards(false)
  }

  const onCheckIfFoundIcon = (): void => {
    if (firstSelectedCard === -1) return

    setIsCheckingCards(true)
    const firstSelectedCardIcon = iconList[firstSelectedCard]
    const secondSelectedCardIcon = iconList[secondSelectedCard]
    setMatchAttempts(matchAttempts + 1)

    if (firstSelectedCardIcon === secondSelectedCardIcon) {
      setTimeout(() => {
        const iconFoundListClone = [...iconFoundList]
        iconFoundListClone.push(firstSelectedCardIcon)
        setIconFoundList(iconFoundListClone)
        onEndCHeckingSelectedCards()
      }, 1000)
    } else {
      setTimeout(onEndCHeckingSelectedCards, 1000)
    }
  }

  const buildFlexElement = (start: number): React.ReactNode => {
    const flexIcons = iconList.slice(start, start + difficulty / 4)
    return (
      <FlexElement>
        {flexIcons.map((icon: string, index: number): React.ReactNode => {
          const adjustedIndex = index + start
          const wasNotFound = iconFoundList.indexOf(icon) === -1
          const isTheFirstSelectedCard = firstSelectedCard === adjustedIndex
          const isTheSecondSelectedCard = secondSelectedCard === adjustedIndex
          const onClick = onSelectCard(adjustedIndex)

          const isShowingFrontFace =
            isTheFirstSelectedCard || isTheSecondSelectedCard

          return (
            <CardItem
              key={adjustedIndex}
              onClick={onClick}
              isVisible={wasNotFound}
              isShowingFrontFace={isShowingFrontFace}
              disabled={isPaused || isShowingFrontFace}
              numOfCards={difficulty}
            >
              <ImageItem path={`${icon}.png`} />
            </CardItem>
          )
        })}
      </FlexElement>
    )
  }

  useEffect(onCheckIfFoundIcon, [secondSelectedCard])

  return (
    <Container>
      {[0, 1, 2, 3].map((item: number): React.ReactNode => {
        return buildFlexElement((difficulty / 4) * item)
      })}
    </Container>
  )
}

export default GameCards
