import { RFValue } from 'react-native-responsive-fontsize'
import styled from 'styled-components/native'



export const Image = styled.Image`
  background: ${({ theme }) => theme.colors.darkGray};
  width: ${RFValue(119)}px;
  height: ${RFValue(79)}px;
  border-radius: ${({ theme }) => theme.borderRadius.md};
`

export const Label = styled.Text`
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.fonts.family.semiBold};
  font-size: ${({ theme }) => theme.fonts.size.sm};
  flex-shrink: 1;
`

export const Description = styled.Text`
  color: ${({ theme }) => theme.colors.darkGray};
  font-family: ${({ theme }) => theme.fonts.family.mediumn};
  font-size: ${({ theme }) => theme.fonts.size.xm};
  flex-shrink: 1;
`