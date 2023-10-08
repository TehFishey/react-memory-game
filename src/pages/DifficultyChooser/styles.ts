import styled from 'styled-components'
import DifficultyItem from '../../components/DifficultyItem'
import ImageChoiceItem from '../../components/ImageChoiceItem'

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  user-select: none;
`

export const MenuContainer = styled.div`
  border: 2px solid ${({ theme }): string => theme.primaryText};
  border-radius: 5px;
  width: clamp(80%, 500px, 100%);
  overflow: hidden;
`

export const AppName = styled.h1`
  font-size: 1.75rem;
  text-transform: uppercase;
  font-weight: bold;
  text-align: center;
  background: ${({ theme }): string => theme.primaryText};
  color: ${({ theme }): string => theme.background};
  padding: 8px 0;
  box-sizing: border-box;
  margin: 0;
  outline: 0;
`

export const MenuContent = styled.div`
  padding: 32px 24px;
`
export const DifficultyLabelContainer = styled.div`
  display: flex;
  align-items: center;
  padding-left: 8px;
`

export const DifficultyLabel = styled.div`
  flex: 1;
`

export const DifficultyLabelTitle = styled.div`
  font-weight: bold;
  text-transform: uppercase;
  font-size: 1.25rem;
`

export const DifficultyLabelSubtitle = styled.div``

export const SwitchThemesButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  width: 3rem;
  height: 3rem;
  border-radius: 100%;
  transition: all 0.2s ease-in-out;
  cursor: pointer;
  &:hover {
    background: ${({ theme }): string => theme.accent};
    color: white;
  }
`

export const Difficulty = styled(DifficultyItem)`
  text-align: center;
  flex: 1;

  @media (max-width: 600px) {
    margin: 8px 8px;
    width: 100%;
  }
  @media (min-width: 601px) {
    margin: 32px 8px;
    width: 25%;
  }
`

export const ImageChoice = styled(ImageChoiceItem)`
  text-align: center;
  flex: 1;

  @media (max-width: 600px) {
    margin: 8px 8px;
    width: 100%;
  }
  @media (min-width: 601px) {
    margin: 32px 8px;
    width: 25%;
  }
`

export const SecretImageChoice = styled(ImageChoice)`
  border: none;
  opacity: ${({ isSelected }): string => {
    return isSelected ? `1.0` : `0.2`
  }};
`

export const DifficultyContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 24px;

  @media (max-width: 600px) {
    flex-direction: column;
  }
  @media (min-width: 601px) {
    flex-wrap: wrap;
  }
`

export const PlayButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 24px;
`

export const PlayButton = styled.div`
  font-size: 1.5rem;
  text-transform: uppercase;
  font-weight: bold;
  background: ${({ theme }): string => theme.accent};
  color: white;
  padding: 20px 16px;
  text-align: center;
  border-radius: 5px;
  margin: 0 8px 0 auto;
  width: 50%;
  cursor: pointer;
  transition: transform 0.1s ease-in-out;
  box-shadow: -1px 1px 2px rgba(0, 0, 0, 0.2);
  &:hover {
    transform: scale(1.02);
  }
`
