import DIFFICULTIES from '../../config/Difficulties'
import { ImageSetPrefix } from '../../config/ImageSets'

import {
  GameConfigAction,
  GameConfigActionTypes,
  GameConfigState,
} from '../../types/GameConfig'

const initialState: GameConfigState = {
  difficulty: DIFFICULTIES.MEDIUM,
  imageSets: ['ADULT'] as ImageSetPrefix[],
}

export default (state = initialState, action: GameConfigAction) => {
  const { type, payload } = action

  switch (type) {
    case GameConfigActionTypes.SET_CONFIG_DIFFICULTY:
      return {
        ...state,
        difficulty: payload as number,
      }
    case GameConfigActionTypes.SET_CONFIG_IMAGES:
      const toggledPrefix = payload as ImageSetPrefix
      let newImageSets: ImageSetPrefix[] = [...state.imageSets]

      if (newImageSets.includes(toggledPrefix) && newImageSets.length === 1)
        return state
      else if (toggledPrefix === 'SHEEP') newImageSets = ['SHEEP']
      else {
        if (newImageSets.includes('SHEEP'))
          newImageSets.splice(newImageSets.indexOf('SHEEP'), 1)
        newImageSets.includes(toggledPrefix)
          ? newImageSets.splice(newImageSets.indexOf(toggledPrefix), 1)
          : newImageSets.push(toggledPrefix)
      }

      return {
        ...state,
        imageSets: newImageSets,
      }
    default:
      return state
  }
}
