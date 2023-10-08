import { css } from 'styled-components'
import styled from 'styled-components'

const fontStyle = css`
  color: ${({ theme }): string => theme.primaryText};
  line-height: 1.5;
  font-size: 1rem;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
`
export const Wrapper = styled.div`
  height: 100%;
  font-family: 'Noto Sans', monospace;
  background: ${({ theme }): string => theme.background};
  ${fontStyle}

  textarea, input, button {
    font-family: 'Noto Sans', monospace;
    ${fontStyle}
  }
`
