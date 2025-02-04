import React from 'react'
import { HashRouter, Switch, Route } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import DificultyChooser from '../DifficultyChooser'
import { Wrapper } from '../../styles/Wrapper'
import { useTypedSelector } from '../../hooks'
import THEME_COLORS from '../../styles/Theme'
import { ThemeTypes } from '../../types/Theme'
import Game from '../Game'

const App: React.FC = () => {
  const themeType = useTypedSelector(({ Theme }) => Theme.type)
  const themeColors = THEME_COLORS[themeType || ThemeTypes.light]

  return (
    <ThemeProvider theme={themeColors}>
      <Wrapper>
        <HashRouter basename={process.env.PUBLIC_URL}>
          <Switch>
            <Route exact path="/" component={DificultyChooser} />
            <Route exact path="/game" component={Game} />
          </Switch>
        </HashRouter>
      </Wrapper>
    </ThemeProvider>
  )
}

export default App
