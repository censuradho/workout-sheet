import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { memo } from 'react'
import { RootStackParamList } from 'src/routes/types';

import * as Styles from './styles'

import { data } from 'src/mock'
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import { useTheme } from 'src/hooks';

type WorkoutProps = NativeStackScreenProps<RootStackParamList, 'WORKOUT'>;

function BaseWorkout ({ route }: WorkoutProps) {
  const { colors } = useTheme()

  const { weekId, workoutId } = route.params

  const week = data[weekId]

  return (
    <SafeAreaView>
      <StatusBar backgroundColor={colors.white} />
      <Styles.Container>
        <Styles.Header>
          <Styles.Week>{week?.label}</Styles.Week>
          <Styles.WorkoutTitle></Styles.WorkoutTitle>
        </Styles.Header>
      </Styles.Container>
    </SafeAreaView>
  )
}

export const Workout = memo(BaseWorkout)