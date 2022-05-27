import styled from 'styled-components/native'

import { RectButton } from 'react-native-gesture-handler'

import { theme } from 'src/theme/templates'

export interface Variante {
  variante?: keyof typeof theme['buttons']
}

export interface ButtonProps {
  fullWidth?: boolean
  variante?: Variante['variante']
}

export const Button = styled(RectButton)<ButtonProps>`
  padding: 16px;
  border-radius: ${({ theme }) => theme.borderRadius.sm};
  justify-content: center;
  align-items: center;
  background: ${({ theme, variante = 'primary' }) =>  theme.buttons[variante].background};
  flex-direction: row;
`

export const Text = styled.Text<Variante>`
  color: ${({ theme, variante = 'primary' }) => theme.buttons[variante].color}
  font-family: ${({ theme }) => theme.fonts.family.mediumn};
  padding: 0 16px;
`

export const IconContainer = styled.View``