import { NavigationContainer, DefaultTheme } from '@react-navigation/native'

import { useTheme } from 'src/hooks'
import { Welcome } from 'src/pages'

function RootRoute() {
  const { colors } = useTheme()

  return (
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
      <Welcome />
    </NavigationContainer>
  )
}

export default RootRoute
