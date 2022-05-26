import { BorderlessButton } from 'react-native-gesture-handler'

import styled from 'styled-components/native'

export interface ButtonProps {
  size: number
}

export const Button = styled(BorderlessButton).attrs(props => ({ ...props }))<ButtonProps>`
  width: ${({ size = 30}) => `${size}px`};
  height: ${({ size = 30}) => `${size}px`};
  z-index: 20;

  align-items: center;
  justify-content: center;
  border-radius: ${({ size }) => size / 2}px;
`
