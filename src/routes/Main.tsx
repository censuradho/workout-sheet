import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { RootMainParamList } from './types'

import * as Pages from 'src/pages/private'
import { useTheme } from 'src/hooks'
import { ButtonIcon } from 'src/components'

const Stack = createNativeStackNavigator<RootMainParamList>()

export function Main () {
  const { colors } = useTheme()
  
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false
      }}
    >
      <Stack.Screen 
        name="INDEX" 
        component={Pages.Main} 
      />
      <Stack.Screen 
        name="WEEK" 
        component={Pages.Week} 

      />
      <Stack.Screen 
        name="WORKOUT" 
        component={Pages.Workout}

      />
    </Stack.Navigator>
  )
}