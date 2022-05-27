import { memo } from 'react'

import * as Styles from './styles'

interface CardProps {}

function BaseCard (props: CardProps) {
  return (
    <Styles.Container>
      
    </Styles.Container>
  )
}

export const Card = memo(BaseCard)