import { StatusBar } from 'expo-status-bar'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import * as OnBoard from 'src/pages/public/OnBoard'

import { routePaths } from 'src/constants/routes'
import { useTheme } from 'src/hooks'

const Stack = createNativeStackNavigator()

export function OnBoardRoutes () {
  return (
    <>
      <StatusBar style="dark" />
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen 
          name={routePaths.public.ON_BOARD.WELCOME} 
          component={OnBoard.Welcome}
        />
        <Stack.Screen 
          name={routePaths.public.ON_BOARD.GENDER} 
          component={OnBoard.Gender}
        />
        <Stack.Screen 
          name={routePaths.public.ON_BOARD.HEIGHT} 
          component={OnBoard.Height}
          options={{
            animation: 'slide_from_right'
          }}
        />
        <Stack.Screen 
          name={routePaths.public.ON_BOARD.WEIGHT} 
          component={OnBoard.Weight}
          options={{
            animation: 'slide_from_right'
          }}
        />
        <Stack.Screen 
          name={routePaths.public.ON_BOARD.GOALS} 
          component={OnBoard.Goals}
          options={{
            animation: 'slide_from_right'
          }}
        />
        <Stack.Screen 
          name={routePaths.public.ON_BOARD.FIT_LEVEL} 
          component={OnBoard.FitLevel}
          options={{
            animation: 'slide_from_right'
          }}
        />
        <Stack.Screen 
          name={routePaths.public.ON_BOARD.CHRONIC_PROBLEM} 
          component={OnBoard.ChronicProblem}
          options={{
            animation: 'slide_from_right'
          }}
        />
        <Stack.Screen 
          name={routePaths.public.ON_BOARD.ACCOUNT} 
          component={OnBoard.Account}
          options={{
            animation: 'slide_from_right'
          }}
        />
        <Stack.Screen 
          name={routePaths.public.ON_BOARD.DONE} 
          component={OnBoard.Done}
          options={{
            animation: 'slide_from_right'
          }}
        />
      </Stack.Navigator>
    </>
  )
}
