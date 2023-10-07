import { useEffect, useContext } from 'react'
import { useFetch } from '../../hooks'
import ajaxConfig from '../../config/Ajax'
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

  useEffect(() => {
    const calcScore = (seconds: number, difficulty: number): number => {
      return Math.round(
        (1 +
          difficulty / 4 +
          Math.max(0, ((difficulty / 10) * 45 - seconds) / 15) +
          Math.max(0, (difficulty * 1.5 - matchAttempts) / 4)) *
          500,
      )
    }

    if (iconFoundList.length === difficulty / 2) {
      setIsPaused(true)
      onPauseTimer()

      const score = calcScore(seconds, difficulty)

      setScore(score)
      useFetch(ajaxConfig.url, { time: seconds, score: score })
      setIsShowingWinModal(true)
    }
  }, [
    difficulty,
    seconds,
    matchAttempts,
    iconFoundList.length,
    onPauseTimer,
    setScore,
    setIsPaused,
    setIsShowingWinModal,
  ])
}
