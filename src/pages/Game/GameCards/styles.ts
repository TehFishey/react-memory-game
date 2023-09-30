import styled from 'styled-components'
import Card from '../../../components/Card'

export const Container = styled.div`
  min-height: 100%;
  display: flex;
  justify-content: center;
  align-content: center;
  align-items: center;
  flex-wrap: wrap;
  padding: 0 16px 64px 16px;
`

type CardItemType = {
  numOfCards: number
}

export const CardItem = styled(Card)<CardItemType>`
  @media (max-width: 600px) {
    flex: 1 0
      calc((100% / ${({ numOfCards }): number => numOfCards / 4}) - 16px);
    min-height: 55px;
    min-width: 55px;
    height: 10vh;
    font-size: 3rem;
  }
  @media (min-width: 601px) {
    flex: 1 0
      calc((100% / ${({ numOfCards }): number => numOfCards / 4}) - 16px);
    min-height: 100px;
    min-width: 100px;
    height: 20vh;
    font-size: 8rem;
  }
`
