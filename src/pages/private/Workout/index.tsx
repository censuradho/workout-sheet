import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { memo } from 'react'
import { RootStackParamList } from 'src/routes/types';
import { FlatList } from 'react-native-gesture-handler';

import * as Styles from './styles'

import { data } from 'src/mock'
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import { useTheme } from 'src/hooks';
import { Exercise } from './components';
import { Box } from 'src/components';

type WorkoutProps = NativeStackScreenProps<RootStackParamList, 'WORKOUT'>;

function BaseWorkout ({ route }: WorkoutProps) {
  const { colors } = useTheme()

  const { weekId, workoutId } = route.params

  const week = data?.[weekId]
  const workout = week?.workout?.[workoutId]
  const exercise = week?.workout?.[workoutId]?.exercise

  const exerciseData = Object.entries(exercise || {}).map(([key, value]) => ({
    id: key,
    imageUri: 'https://images.unsplash.com/photo-1517130038641-a774d04afb3c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    ...value
  }))

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar backgroundColor={colors.white} />
      <Styles.Container>
        <Styles.Header>
          <Styles.Week>{week?.label}</Styles.Week>
          <Styles.WorkoutTitle>{workout?.label}</Styles.WorkoutTitle>
        </Styles.Header>
        <Styles.FlatListContainer>
          <FlatList 
            data={exerciseData}
            keyExtractor={item => item.id}
            renderItem={({ item }) => (
              <Exercise {...item}/>
            )}
          />
        </Styles.FlatListContainer>
      </Styles.Container>
    </SafeAreaView>
  )
}

export const Workout = memo(BaseWorkout)