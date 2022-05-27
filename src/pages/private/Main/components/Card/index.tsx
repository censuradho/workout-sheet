import { useNavigation } from '@react-navigation/native';
import { GestureHandlerRootView } from 'react-native-gesture-handler'

import { memo } from 'react'
import { routePaths } from 'src/constants/routes';

import * as Styles from './styles'
import { WeekProps } from 'src/pages/private/Week';
import { format } from 'date-fns';

interface CardProps extends Styles.Props {
  label: string;
  id: string| number;
  date: string | Date
}

function BaseCard ({ 
  active,
  label,
  id,
  date
}: CardProps) {
  const navigation = useNavigation()

  return (
    <GestureHandlerRootView>
      <Styles.Container 
        active={active} 
        onPress={() => navigation.navigate('WEEK', { id })} 
      >
        <Styles.Label active={active}>{label}</Styles.Label>
        <Styles.Date active={active}>{format(date, 'dd, MMM')}</Styles.Date>
      </Styles.Container>
    </GestureHandlerRootView>
  )
}

export const Card = memo(BaseCard)