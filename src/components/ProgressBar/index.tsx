import { memo } from "react";

import * as Styles from './styles'

interface ProgressBarProps {
  percent?: number
}

function BaseProgressBar ({ percent }: ProgressBarProps) {
  return (
    <Styles.Container>
      <Styles.Progress percent={percent} />
    </Styles.Container>
  )
}

export const ProgressBar = memo(BaseProgressBar)