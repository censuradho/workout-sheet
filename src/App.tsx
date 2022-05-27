import AppLoading from 'expo-app-loading'

import { useFonts, Poppins_500Medium, Poppins_600SemiBold } from '@expo-google-fonts/poppins'


import ThemeProvider from 'src/theme'
import RootRoute from './routes'

import 'intl'
import 'intl/locale-data/jsonp/pt-BR'

export default function App() {
  const [isFontLoaded] = useFonts({
    medium: Poppins_500Medium,
    semiBold: Poppins_600SemiBold,
  })

  if (!isFontLoaded) return <AppLoading />

  return (
      <ThemeProvider>
        <RootRoute />
      </ThemeProvider>
  )
}
