import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { memo, useState } from 'react'
import { FlatList } from 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native-safe-area-context';

import * as Styles from './styles'

import { data, Exercise as ExerciseType } from 'src/mock'
import { useTheme } from 'src/hooks';

import { Execute, Exercise } from './components';
import { BasicButton, Box, Button } from 'src/components';

import { RootStackParamList } from 'src/routes/types';

type WorkoutProps = NativeStackScreenProps<RootStackParamList, 'WORKOUT'>;


function BaseWorkout ({ route }: WorkoutProps) {
  const { colors } = useTheme()
  
  const { weekId, workoutId } = route.params

  const [exercise, setExercise] = useState<ExerciseType | null>(null)

  const week = data?.[weekId]
  const workout = week?.workout?.[workoutId]
  const exercises = week?.workout?.[workoutId]?.exercise

  const exerciseData = Object.entries(exercises || {}).map(([key, value]) => ({
    id: key,
    thumb: 'https://images.unsplash.com/photo-1517130038641-a774d04afb3c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    ...value
  }))

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar backgroundColor={colors.white} />
      <Execute 
        visible={!!exercise} 
        onClose={() => setExercise(null)}
        data={exercise}
      />
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
              <Exercise onPress={() => setExercise(item)} {...item}/>
            )}
          />
        </Styles.FlatListContainer>
        <Styles.Footer>
          <Button>Start</Button>
          <Box marginTop={15}>
            <BasicButton>Complete workout</BasicButton>
          </Box>
        </Styles.Footer>
      </Styles.Container>
    </SafeAreaView>
  )
}

export const Workout = memo(BaseWorkout)