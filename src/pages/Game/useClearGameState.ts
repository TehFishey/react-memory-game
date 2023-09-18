import { useContext } from 'react'
import { useArrayShuffle } from '../../hooks'
import { useImageSets, ImageSetPrefix } from '../../hooks'
import GameContext from './GameContext'

type ClearGameStateFunction = () => void

export default (): ClearGameStateFunction => {
  const {
    setIconList,
    setIconFoundList,
    setIsPaused,
    setFirstSelectedCard,
    setSecondSelectedCard,
    difficulty,
    onStopTimer,
  } = useContext(GameContext)

  const ImageSet = useImageSets("ADULT")

  const onShuffleArray = useArrayShuffle<string>()

  const onClearGameState = (): void => {
    setIconFoundList([])
    setIsPaused(true)
    setFirstSelectedCard(-1)
    setSecondSelectedCard(-1)
    onStopTimer()

    const shuffledArray = onShuffleArray(ImageSet)
    let correctLengthArray = shuffledArray.slice(0, difficulty / 2)
    correctLengthArray = correctLengthArray.concat(correctLengthArray)
    const correctLengthSuffledArray = onShuffleArray(correctLengthArray)
    setIconList(correctLengthSuffledArray)
  }

  return onClearGameState
}
