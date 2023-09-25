import { useSelector, TypedUseSelectorHook } from 'react-redux'
import { ThemePayload } from '../types/Theme'
import { GameConfigState } from '../types/GameConfig'

interface RootState {
  Theme: ThemePayload
  GameConfig: GameConfigState
}

const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector

export default useTypedSelector
