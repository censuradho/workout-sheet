import { ReactNode } from 'react'
import { ThemeProvider as StyledThemeProvider } from 'styled-components'

import { theme } from './templates'

interface ThemeProviderProps {
  children: ReactNode
}

function ThemeProvider ({ children }: ThemeProviderProps) {
  return (
    <StyledThemeProvider theme={theme}>
      {children}
    </StyledThemeProvider>
  )
}

export default ThemeProvider