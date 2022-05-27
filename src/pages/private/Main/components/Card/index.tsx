import { memo } from 'react'

import * as Styles from './styles'

interface CardProps extends Styles.Props {
  label: string
}

function BaseCard ({ 
  active,
  label,
}: CardProps) {
  return (
    <Styles.Container active={active}>
      <Styles.Label active={active}>{label}</Styles.Label>
    </Styles.Container>
  )
}

export const Card = memo(BaseCard)