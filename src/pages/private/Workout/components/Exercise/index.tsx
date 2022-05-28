import { memo } from 'react'
import { Box } from 'src/components'

import * as Styles from './styles'

interface ExerciseProps {
  imageUri: string;
  label: string;
  description?: string
}

function BaseExercise ({
  imageUri,
  label,
  description
}: ExerciseProps) {
  
  return (
    <Styles.Container>
      <Styles.Image source={{ uri: imageUri }} />
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