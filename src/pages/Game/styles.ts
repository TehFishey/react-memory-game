import styled from 'styled-components'

export const Container = styled.div`
  background: ${({ theme }): string => theme.background};
  height: 100%;
  border-radius: 5px;
`
