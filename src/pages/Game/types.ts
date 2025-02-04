import { ImageSetPrefix } from "../../config/ImageSets"

export type GameContextValue = {
  difficulty: number
  imageSets: ImageSetPrefix[]
  score: number
  setScore: React.Dispatch<React.SetStateAction<number>>
  matchAttempts: number
  setMatchAttempts: React.Dispatch<React.SetStateAction<number>>
  isPaused: boolean
  setIsPaused: React.Dispatch<React.SetStateAction<boolean>>
  iconList: string[]
  setIconList: React.Dispatch<React.SetStateAction<string[]>>
  iconFoundList: string[]
  setIconFoundList: React.Dispatch<React.SetStateAction<string[]>>
  firstSelectedCard: number
  setFirstSelectedCard: React.Dispatch<React.SetStateAction<number>>
  secondSelectedCard: number
  setSecondSelectedCard: React.Dispatch<React.SetStateAction<number>>
  isCheckingCards: boolean
  setIsCheckingCards: React.Dispatch<React.SetStateAction<boolean>>
  isShowingWinModal: boolean
  setIsShowingWinModal: React.Dispatch<React.SetStateAction<boolean>>
  seconds: number
  hoursText: string
  minutesText: string
  secondsText: string
  onStartTimer: () => void
  onStopTimer: () => void
  onPauseTimer: () => void
}
