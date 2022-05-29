import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { RootMainParamList } from './types'

import * as Pages from 'src/pages/private'

const Stack = createNativeStackNavigator<RootMainParamList>()

export function Main () {
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
        options={{
          animation: 'slide_from_right'
        }}

      />
    </Stack.Navigator>
  )
}