import { useContext } from 'react'
import { useArrayShuffle } from '../../hooks'
import { useImageSets } from '../../hooks'
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
    imageSets,
    onStopTimer,
    onStartTimer,
  } = useContext(GameContext)

  const ImageSet = useImageSets(imageSets)

  const onShuffleArray = useArrayShuffle<string>()

  const onClearGameState = (): void => {
    setIconFoundList([])
    setFirstSelectedCard(-1)
    setSecondSelectedCard(-1)
    onStopTimer()
    onStartTimer()
    setIsPaused(false)

    const shuffledArray = onShuffleArray(ImageSet)
    let correctLengthArray = shuffledArray.slice(0, difficulty / 2)
    correctLengthArray = correctLengthArray.concat(correctLengthArray)
    const correctLengthSuffledArray = onShuffleArray(correctLengthArray)
    setIconList(correctLengthSuffledArray)
  }

  return onClearGameState
}
