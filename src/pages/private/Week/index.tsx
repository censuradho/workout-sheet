import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { memo } from 'react'
import { RootMainParamList } from 'src/routes/types';
import { SafeAreaView } from 'react-native-safe-area-context';
import { isEqual } from 'date-fns'
import { FlatList } from 'react-native-gesture-handler';

import * as Styles from './styles'

import { data } from 'src/mock'

import { Card } from './components';
import { Box, ButtonIcon, HeaderStack } from 'src/components';

type WeekProps = NativeStackScreenProps<RootMainParamList, 'WEEK'>;

function BaseWeek ({ route }: WeekProps) {
  const id = route.params.id as string

  const { [id]: _data } = data

  const cardData = Object.entries(_data.workout).map(([key, value]) => ({
    weekId: id,
    workoutId: key,
    ...value
  }))

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Styles.Container>
        <HeaderStack title="Workouts"/>
        <FlatList 
          data={cardData}
          keyExtractor={item => item.weekId}
          renderItem={({ item }) => {
            const workoutDate = new Date(item.date).setHours(0,0,0,0)
            const currentDate = new Date().setHours(0,0,0,0)

            return (
              <Card 
                active={isEqual(workoutDate, currentDate)} 
                {...item} 
              />
            )
          }}
        />
      </Styles.Container>
    </SafeAreaView>
  )
}

export const Week = memo(BaseWeek)