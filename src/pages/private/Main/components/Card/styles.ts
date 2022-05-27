import { RFValue } from 'react-native-responsive-fontsize'
import styled from 'styled-components/native'

export const Container = styled.View`
  width: 100%;
  padding: ${({ theme }) => theme.sizes.sm};
  background: ${({ theme }) => theme.colors.blackLight};
  height: ${RFValue(150)}px;
  width: ${RFValue(280)}px;
  margin-right: 16px;
  border-radius: ${({ theme }) => theme.borderRadius.md};
`