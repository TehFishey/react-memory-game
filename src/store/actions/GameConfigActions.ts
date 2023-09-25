import { ImageSetPrefix } from '../../config/ImageSets'
import { GameConfigActionTypes, GameConfigAction } from '../../types/GameConfig'

export const setGameDifficulty = (payload: number): GameConfigAction => ({
    type: GameConfigActionTypes.SET_CONFIG_DIFFICULTY,
    payload,
})

export const toggleGameImageSet = (payload: ImageSetPrefix): GameConfigAction => ({
    type: GameConfigActionTypes.SET_CONFIG_IMAGES,
    payload,
})
