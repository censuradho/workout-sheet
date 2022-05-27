import styled, { css } from 'styled-components/native'


import { theme } from 'src/theme/templates'

export interface Variante {
  variante?: keyof typeof theme['basicButton']
}

export interface ButtonProps {
  fullWidth?: boolean
  variante?: Variante['variante']
}

export const Button = styled.TouchableOpacity<ButtonProps>`
  padding: 16px;
  border-radius: ${({ theme }) => theme.borderRadius.sm};
  justify-content: center;
  align-items: center;
  flex-direction: row;
  ${({ disabled, theme }) => disabled && css`
    opacity: ${theme.activityOpacity - 0.2};
  `}
`

export const Text = styled.Text<Variante>`
  color: ${({ theme, variante = 'primary' }) => theme.basicButton[variante].color}
  font-family: ${({ theme }) => theme.fonts.family.mediumn};
  padding: 0 16px;
`

export const IconContainer = styled.View``