import { StatusBar } from 'expo-status-bar'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import * as OnBoard from 'src/pages/public/OnBoard'

import { routePaths } from 'src/constants/routes'

const Stack = createNativeStackNavigator()

export function OnBoardRoutes () {
  return (
    <>
      <StatusBar style="light" />
      <Stack.Navigator>
        <Stack.Screen name={routePaths.public.ON_BOARD.GENDER} component={OnBoard.Gender} />
      </Stack.Navigator>
    </>
  )
}
