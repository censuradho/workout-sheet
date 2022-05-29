import { memo } from 'react'
import { Box } from 'src/components'

import * as Styles from './styles'

interface ExerciseProps {
  thumb: string;
  label: string;
  description?: string,
  onPress?: () => void
}

function BaseExercise ({
  thumb,
  label,
  description,
  onPress
}: ExerciseProps) {
  
  return (

    <Styles.Container onPress={onPress}>
      <Styles.Image source={{ uri: thumb }} />
      <Box 
        paddingLeft={16}  
        alignItems="flex-start" 
        justifyContent="flex-start"
        flex={1}
      >
        <Styles.Label>{label}</Styles.Label>
        <Styles.Description>{description}</Styles.Description>
      </Box>
    </Styles.Container>
  )
}

export const Exercise = memo(BaseExercise)