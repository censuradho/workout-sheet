import { memo } from 'react'

import * as Styles from './styles'

export interface WeekProps {
  id: string | number
}

function BaseWeek ({ id }: WeekProps) {
  console.log(id)

  return (
    <Styles.Container>

    </Styles.Container>
  )
}

export const Week = memo(BaseWeek)