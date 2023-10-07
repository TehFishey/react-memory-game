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
        `Difficulty: ${difficulty} Cards`,
        `Time: ${hoursText}:${minutesText}:${secondsText}`,
        `Accuracy: ${difficulty / 2} out of ${matchAttempts} Matches`,
        `Score: ${score}`,
      ]}
    >
      <SecondaryAction onClick={onGoBack}>Go Back</SecondaryAction>
      <PrimaryAction onClick={onPlayAgain}>Play Again</PrimaryAction>
    </AlertModal>
  )
}

export default GameWinMessage
