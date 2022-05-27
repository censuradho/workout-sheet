import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { memo } from 'react'
import { RootStackParamList } from 'src/routes/types';

import * as Styles from './styles'


type WeekProps = NativeStackScreenProps<RootStackParamList, 'WEEK'>;

function BaseWeek ({ route }: WeekProps) {
  console.log(route.params.id)

  return (
    <Styles.Container>

    </Styles.Container>
  )
}

export const Week = memo(BaseWeek)