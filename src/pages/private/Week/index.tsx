import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { memo } from 'react'
import { RootStackParamList } from 'src/routes/types';
import { SafeAreaView } from 'react-native-safe-area-context';
import { isEqual } from 'date-fns'

import * as Styles from './styles'

import { data } from 'src/mock'
import { FlatList } from 'react-native-gesture-handler';
import { Card } from './components';
import { getDateWithoutHour } from 'src/utils/help';


type WeekProps = NativeStackScreenProps<RootStackParamList, 'WEEK'>;

function BaseWeek ({ route }: WeekProps) {
  const id = route.params.id as string

  const { [id]: _data } = data

  const cardData = Object.entries(_data.week).map(([key, value]) => ({
    id: key,
    ...value
  }))


  return (
    <SafeAreaView>
      <Styles.Container>
        <FlatList 
          data={cardData}
          keyExtractor={item => item.id}
          renderItem={({ item, index }) => (
            <Card 
              active={isEqual(new Date(item.date).setHours(0,0,0,0), new Date().setHours(0,0,0,0))} 
              {...item} 
            />
          )}
        />
      </Styles.Container>
    </SafeAreaView>
  )
}

export const Week = memo(BaseWeek)