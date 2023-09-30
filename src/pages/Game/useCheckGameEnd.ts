import { useEffect, useContext } from 'react'
import GameContext from './GameContext'

export default (): void => {
  const {
    iconFoundList,
    difficulty,
    seconds,
    setIsShowingWinModal,
    setIsPaused,
    onPauseTimer,
    setScore,
  } = useContext(GameContext)

  const calcScore = (seconds: number, difficulty: number): number => {
    return 1 + Math.max(0, Math.round(difficulty / 8 - seconds / 15 + 2.5))
  }

  useEffect(() => {
    if (iconFoundList.length === difficulty / 2) {
      setIsPaused(true)
      onPauseTimer()
      setScore(calcScore(seconds, difficulty))
      setIsShowingWinModal(true)
    }
  }, [
    difficulty,
    seconds,
    iconFoundList.length,
    onPauseTimer,
    setScore,
    setIsPaused,
    setIsShowingWinModal,
  ])
}
