import { ThemeTypes } from '../types/Theme'

export default {
  [ThemeTypes.dark]: {
    accent: '#00bbcc',
    primaryText: '#f0f0f0',
    secondaryText: '#ccc',
    background: '#333333',
    controlBar: '#222222',
    cardBackFace: '#111111',
    cardFrontFace: '#e6e6e6',
  },
  [ThemeTypes.light]: {
    accent: '#00bbcc',
    primaryText: '#313131',
    secondaryText: '#616161',
    background: '#f0f0f0',
    controlBar: '#f1f1f1',
    cardBackFace: '#444444',
    cardFrontFace: '#e2e2e2',
  },
}
