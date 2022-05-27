import { NavigationContainer, DefaultTheme } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { useTheme } from 'src/hooks'

import * as Pages from 'src/pages/private'
import * as OnBoard from 'src/pages/public/OnBoard'

import { routePaths } from 'src/constants/routes'
import { StatusBar } from 'expo-status-bar'

const Stack = createNativeStackNavigator()

function RootRoute() {
  const { colors } = useTheme()

  return (
    <>
      <StatusBar style="light"  />    
      <NavigationContainer
        theme={{
          ...DefaultTheme,
          colors: {
            ...DefaultTheme.colors,
            background: colors.black,
            primary: colors.primary,
          },
        }}
      >
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
          <Stack.Screen name={routePaths.private.MAIN} component={Pages.Main} />
        </Stack.Navigator>
      </NavigationContainer>
    </>

  )
}

export default RootRoute
