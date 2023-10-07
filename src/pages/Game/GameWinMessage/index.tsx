import React, { useContext } from 'react'
import { useHistory } from 'react-router-dom'
import { PrimaryAction, SecondaryAction } from './styles'
import AlertModal from '../../../components/AlertModal'
import useClearGameState from '../useClearGameState'
import useCheckGameEnd from '../useCheckGameEnd'
import GameContext from '../GameContext'

const GameWinMessage: React.FC = () => {
  const {
    isShowingWinModal,
    setIsShowingWinModal,
    score,
    difficulty,
    matchAttempts,
    hoursText,
    minutesText,
    secondsText,
    seconds,
  } = useContext(GameContext)

  const onClearGameState = useClearGameState()
  const history = useHistory()
  useCheckGameEnd()

  const onGoBack = (): void => {
    history.goBack()
  }

  const onPlayAgain = (): void => {
    setIsShowingWinModal(false)
    onClearGameState()
  }

  return (
    <AlertModal
      isShowing={isShowingWinModal}
      onCloseModal={onPlayAgain}
      title="Success!"
      message={[
        `Base Score: 500`,
        `Difficulty Bonus (${difficulty} Cards): ${Math.round(
          (difficulty / 4) * 500,
        )}`,
        `Time Bonus (${hoursText}:${minutesText}:${secondsText}) ((${seconds}s)): ${Math.round(
          Math.max(0, ((difficulty / 10) * 45 - seconds) / 15) * 500,
        )}`,
        `Accuracy Bonus: (${matchAttempts} Match Attempts): ${Math.round(
          Math.max(0, (difficulty * 1.5 - matchAttempts) / 4) * 500,
        )}`,
        `Total Score: ${score}`,
      ]}
    >
      <SecondaryAction onClick={onGoBack}>Go Back</SecondaryAction>
      <PrimaryAction onClick={onPlayAgain}>Play Again</PrimaryAction>
    </AlertModal>
  )
}

export default GameWinMessage
