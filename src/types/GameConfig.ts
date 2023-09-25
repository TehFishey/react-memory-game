import { ImageSetPrefix } from '../config/ImageSets'

export type GameConfigState = {
  difficulty: number
  imageSets: ImageSetPrefix[]
}

export enum GameConfigActionTypes {
  SET_CONFIG_DIFFICULTY = 'SET_CONFIG_DIFFICULTY',
  SET_CONFIG_IMAGES = 'SET_CONFIG_IMAGES',
}

export type SetDifficultyAction = {
  type: GameConfigActionTypes.SET_CONFIG_DIFFICULTY
  payload: number
}

export type SetImagesAction = {
  type: GameConfigActionTypes.SET_CONFIG_IMAGES
  payload: ImageSetPrefix
}

export type GameConfigAction = SetDifficultyAction | SetImagesAction
