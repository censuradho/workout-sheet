import { RFValue } from 'react-native-responsive-fontsize'
import styled from 'styled-components/native'
import { RectButton } from 'react-native-gesture-handler'

export interface Props {
  active?: boolean
}

export const Container = styled(RectButton)<Props>`
  width: 100%;
  padding: ${({ theme }) => theme.sizes.sm};
  background: ${({ theme, active }) => active ? theme.colors.white : theme.colors.blackLight };
  height: ${RFValue(150)}px;
  width: ${RFValue(280)}px;
  margin-right: 16px;
  border-radius: ${({ theme }) => theme.borderRadius.md};
  justify-content: flex-end;
`

export const Label = styled.Text<Props>`
  color: ${({ theme, active }) => active ? theme.colors.black : theme.colors.gray };
  font-size: ${({ theme }) => theme.fonts.size.sm};
  font-family: ${({ theme }) => theme.fonts.family.mediumn};
`