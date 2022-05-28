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
    <Box
      flexDirection="row"
      alignItems="center"
      marginBottom={20}
      backgroundColor="yellow"
    >
      <Styles.Image source={{ uri: imageUri }} />
      <Box paddingLeft={16} fullWidth>
        <Styles.Label>{label}</Styles.Label>
        <Styles.Description>{description}</Styles.Description>
      </Box>
    </Box>
  )
}

export const Exercise = memo(BaseExercise)