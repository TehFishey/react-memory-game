import { useEffect, useContext } from 'react'
import GameContext from './GameContext'

export default (): void => {
  const {
    iconFoundList,
    difficulty,
    seconds,
    matchAttempts,
    setIsShowingWinModal,
    setIsPaused,
    onPauseTimer,
    setScore,
  } = useContext(GameContext)

  const calcScore = (seconds: number, difficulty: number): number => {
    return Math.round(
      (1 +
        difficulty / 4 +
        Math.max(0, ((difficulty / 10) * 45 - seconds) / 15) +
        Math.max(0, (difficulty * 1.5 - matchAttempts) / 4)) *
        500,
    )
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
