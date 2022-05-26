import { StatusBar } from 'expo-status-bar'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import * as OnBoard from 'src/pages/public/OnBoard'

import { routePaths } from 'src/constants/routes'
import { useTheme } from 'src/hooks'

const Stack = createNativeStackNavigator()

export function OnBoardRoutes () {
  const { colors } = useTheme()

  return (
    <>
      <StatusBar style="light" />
      <Stack.Navigator
        screenOptions={{
          headerShown: false
        }}
      >
        <Stack.Screen name={routePaths.public.ON_BOARD.WELCOME} component={OnBoard.Welcome} />
        <Stack.Screen name={routePaths.public.ON_BOARD.GENDER} component={OnBoard.Gender} />
      </Stack.Navigator>
    </>
  )
}
