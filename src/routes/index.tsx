import { NavigationContainer, DefaultTheme } from '@react-navigation/native'

import { useTheme } from 'src/hooks'

import { OnBoardRoutes } from './Onboard'

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
      <OnBoardRoutes />
    </NavigationContainer>
  )
}

export default RootRoute
