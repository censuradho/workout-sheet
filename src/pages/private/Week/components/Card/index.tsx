import { useNavigation } from '@react-navigation/native';
import { format } from 'date-fns';
import { memo } from 'react'
import { RectButton, GestureHandlerRootView } from 'react-native-gesture-handler'
import { Box } from 'src/components';

import * as Styles from './styles'

interface CardProps {
  label: string;
  weekId: string | number;
  workoutId: string | number;
  date: string | Date;
  active?: boolean
}

function BaseCard ({
  date,
  weekId,
  label,
  workoutId,
  active
}: CardProps) {
  const navigate = useNavigation()

  const dateParsed = new Date(date)

  const variant: Styles.Props['variant'] = active ? 'primary' : 'transparent'

  return (
    <GestureHandlerRootView>
      <RectButton 
        onPress={() => navigate.navigate('WORKOUT', {
            weekId,
            workoutId
          })}
        >
        <Styles.Container variant={variant}>
          <Box flexDirection="row" alignItems="center">
            <Box>
              <Styles.DayLetter variant={variant}>{format(dateParsed, 'dd')}</Styles.DayLetter>
              <Styles.DayNumber variant={variant}>{format(dateParsed, 'EEE')}</Styles.DayNumber>
            </Box>
            <Styles.Title variant={variant}>{label}</Styles.Title>
          </Box>
        </Styles.Container>
      </RectButton>
    </GestureHandlerRootView>
  )
}

export const Card = memo(BaseCard)