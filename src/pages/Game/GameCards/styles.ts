import styled from 'styled-components'
import Card from '../../../components/Card'

export const Container = styled.div`
  display: flex;
  justify-content: safe center;
  align-content: safe center;
  align-items: safe center;
  flex-wrap: none;
  width: 100%;
  height: calc(100% - 64px);
  box-sizing: border-box;
  margin: 0;
  outline: 0;

  @media (max-width: 600px) {
    flex-direction: row;
    padding: 0px 0px 0px 0px;
    overflow: hidden scroll;
  }
  @media (min-width: 601px) {
    flex-direction: column;
    padding: 0 16px 0;
  }
`

type CardItemType = {
  numOfCards: number
}

export const FlexElement = styled.div`
  display: flex;
  justify-content: safe center;
  align-content: safe center;
  align-items: safe center;
  box-sizing: border-box;
  margin: 0;
  outline: 0;

  @media (max-width: 600px) {
    flex-direction: column;
    padding: 0 0px 0px 0px;
    width: 25%;
    height: 100%;
  }
  @media (min-width: 601px) {
    flex-direction: row;
    padding: 0 16px 8px 16px;
    width: 100%;
    height: 25%;
  }
`

export const CardItem = styled(Card)<CardItemType>`
  font-size: clamp(8vmin, 10vmin, 10vmin);
  box-sizing: border-box;
  min-height: 50px;
  min-width: 50px;

  @media (max-width: 600px) {
    width: calc(100% - 8px);
    height: calc((70vh / ${({ numOfCards }): number => numOfCards / 4}) - 8px);
  }
  @media (min-width: 601px) {
    width: calc((100% / ${({ numOfCards }): number => numOfCards / 4}) - 16px);
    height: 16vh;
  }
`
