import { useNavigation } from '@react-navigation/native';
import { GestureHandlerRootView } from 'react-native-gesture-handler'

import { memo } from 'react'
import { routePaths } from 'src/constants/routes';

import * as Styles from './styles'
import { WeekProps } from 'src/pages/private/Week';

interface CardProps extends Styles.Props {
  label: string;
  id: string| number
}

function BaseCard ({ 
  active,
  label,
  id
}: CardProps) {
  const navigation = useNavigation()

  return (
    <GestureHandlerRootView>
      <Styles.Container 
        active={active} 
        onPress={() => navigation.navigate('WEEK', { id })} 
      >
        <Styles.Label active={active}>{label}</Styles.Label>
      </Styles.Container>
    </GestureHandlerRootView>
  )
}

export const Card = memo(BaseCard)