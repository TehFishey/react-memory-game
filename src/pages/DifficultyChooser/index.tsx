import React from 'react'
import { useHistory } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useDispatch } from 'react-redux'
import DIFFICULTIES from '../../config/Difficulties'
import { ImageSetPrefix } from '../../config/ImageSets'
import { useTypedSelector } from '../../hooks'
import { ThemeTypes } from '../../types/Theme'
import {
  setTheme,
  setGameDifficulty,
  toggleGameImageSet,
} from '../../store/actions'
import {
  Container,
  MenuContainer,
  MenuContent,
  AppName,
  DifficultyContainer,
  DifficultyLabelContainer,
  DifficultyLabelSubtitle,
  DifficultyLabelTitle,
  SwitchThemesButton,
  DifficultyLabel,
  Difficulty,
  ImageChoice,
  SecretImageChoice,
  PlayButton,
  PlayButtonContainer,
} from './styles'

const DifficultyChooser: React.FC = () => {
  const dispatch = useDispatch()
  const history = useHistory()

  const themeType = useTypedSelector(({ Theme }) => Theme.type)

  const selectedDifficulty = useTypedSelector(
    ({ GameConfig }) => GameConfig.difficulty,
  )

  const selectedImageSets = useTypedSelector(
    ({ GameConfig }) => GameConfig.imageSets,
  )

  const onSelectDifficulty = (difficulty: number) => (): void => {
    const action = setGameDifficulty(difficulty)
    dispatch(action)
  }

  const onSelectImageSet = (imageSet: ImageSetPrefix) => (): void => {
    const action = toggleGameImageSet(imageSet)
    dispatch(action)
  }

  const onPlay = (): void => {
    history.push('/game')
  }

  const onSwitchThemes = (): void => {
    const isUsingDark = themeType === ThemeTypes.dark
    const newThemeType = isUsingDark ? ThemeTypes.light : ThemeTypes.dark
    const action = setTheme({ type: newThemeType })
    dispatch(action)
  }

  return (
    <Container>
      <MenuContainer>
        <AppName>Match ’Em Mayhem</AppName>

        <MenuContent>
          <DifficultyLabelContainer>
            <DifficultyLabel>
              <DifficultyLabelTitle>Choose a Difficulty:</DifficultyLabelTitle>
              <DifficultyLabelSubtitle>
                Each difficulty changes the number of cards
              </DifficultyLabelSubtitle>
            </DifficultyLabel>

            <SwitchThemesButton onClick={onSwitchThemes} title="Trocar Temas">
              <FontAwesomeIcon icon="palette" />
            </SwitchThemesButton>
          </DifficultyLabelContainer>

          <DifficultyContainer>
            <Difficulty
              name="Easy"
              numOfCards={DIFFICULTIES.EASY}
              onClick={onSelectDifficulty(DIFFICULTIES.EASY)}
              isSelected={selectedDifficulty === DIFFICULTIES.EASY}
            />
            <Difficulty
              name="Medium"
              numOfCards={DIFFICULTIES.MEDIUM}
              onClick={onSelectDifficulty(DIFFICULTIES.MEDIUM)}
              isSelected={selectedDifficulty === DIFFICULTIES.MEDIUM}
            />
            <Difficulty
              name="Hard"
              numOfCards={DIFFICULTIES.HARD}
              onClick={onSelectDifficulty(DIFFICULTIES.HARD)}
              isSelected={selectedDifficulty === DIFFICULTIES.HARD}
            />
            <Difficulty
              name="Very hard"
              numOfCards={DIFFICULTIES.VERY_HARD}
              onClick={onSelectDifficulty(DIFFICULTIES.VERY_HARD)}
              isSelected={selectedDifficulty === DIFFICULTIES.VERY_HARD}
            />
          </DifficultyContainer>

          <DifficultyLabelContainer>
            <DifficultyLabel>
              <DifficultyLabelTitle>Choose Test Subjects:</DifficultyLabelTitle>
              <DifficultyLabelSubtitle>
                Determines what cards will need to be matched
              </DifficultyLabelSubtitle>
            </DifficultyLabel>
          </DifficultyLabelContainer>

          <DifficultyContainer>
            <ImageChoice
              name="Capsules"
              onClick={onSelectImageSet('CAPSULE')}
              isSelected={selectedImageSets.includes('CAPSULE')}
            />
            <ImageChoice
              name="Juveniles"
              onClick={onSelectImageSet('CHILD')}
              isSelected={selectedImageSets.includes('CHILD')}
            />
            <ImageChoice
              name="Adults"
              onClick={onSelectImageSet('ADULT')}
              isSelected={selectedImageSets.includes('ADULT')}
            />
            <SecretImageChoice
              className="secret"
              name="???"
              onClick={onSelectImageSet('SHEEP')}
              isSelected={selectedImageSets.includes('SHEEP')}
            />
          </DifficultyContainer>

          <PlayButtonContainer>
            <PlayButton onClick={onPlay}>Play</PlayButton>
          </PlayButtonContainer>
        </MenuContent>
      </MenuContainer>
    </Container>
  )
}

export default DifficultyChooser
