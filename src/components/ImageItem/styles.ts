import styled from 'styled-components'

type ImageType = {
  path: string
  scaled: boolean
}

export const Container = styled.div<ImageType>`
  width: 140px;
  height: 140px;
  position: relative;
  background-image: ${({ path }): string => {
    return `url(${path})`
  }};
  background-repeat: no-repeat;
  background-position: center;
  background-size: ${({ scaled }): string => {
    return scaled ? 'contain' : 'auto'
  }};
`
