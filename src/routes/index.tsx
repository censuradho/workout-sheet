import { NavigationContainer, DefaultTheme } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { StatusBar } from 'expo-status-bar'

import { useTheme } from 'src/hooks'

import * as Pages from 'src/pages'
import * as OnBoard from 'src/pages/public/OnBoard'

import { routePaths } from 'src/constants/routes'

import { RootStackParamList } from './types'
import { Main } from './Main'

const Stack = createNativeStackNavigator<RootStackParamList>()

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
			    <Stack.Screen name="SIGN_IN" component={Pages.SignIn} />

        {/* <Stack.Screen 
            name="WELCOME"
            component={OnBoard.Welcome}
          />
          <Stack.Screen 
            name="GENDER" 
            component={OnBoard.Gender}
          />
          <Stack.Screen 
            name="HEIGHT"
            component={OnBoard.Height}
            options={{
              animation: 'slide_from_right'
            }}
          />
          <Stack.Screen 
            name="WEIGHT"
            component={OnBoard.Weight}
            options={{
              animation: 'slide_from_right'
            }}
          />
          <Stack.Screen 
            name="GOALS"
            component={OnBoard.Goals}
            options={{
              animation: 'slide_from_right'
            }}
          />
          <Stack.Screen 
            name="FIT_LEVEL"
            component={OnBoard.FitLevel}
            options={{
              animation: 'slide_from_right'
            }}
          />
          <Stack.Screen 
            name="CHRONIC_PROBLEM"
            component={OnBoard.ChronicProblem}
            options={{
              animation: 'slide_from_right'
            }}
          />
          <Stack.Screen 
            name="ACCOUNT"
            component={OnBoard.Account}
            options={{
              animation: 'slide_from_right'
            }}
          />
          <Stack.Screen 
            name="DONE"
            component={OnBoard.Done}
            options={{
              animation: 'slide_from_right'
            }}
          /> */}
          {/* <Stack.Screen 
            name="MAIN"
            component={Pages.Main} 
          />
          <Stack.Screen 
            name="WEEK"
            component={Pages.Week} 
          />
          <Stack.Screen 
            name="WORKOUT"
            component={Pages.Workout} 
          /> */}

			    <Stack.Screen name="MAIN" component={Main} />
        </Stack.Navigator>
      </NavigationContainer>
    </>

  )
}

export default RootRoute
