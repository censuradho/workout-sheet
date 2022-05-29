import { RFValue } from 'react-native-responsive-fontsize'
import styled from 'styled-components/native'

export const Title = styled.Text`
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.fonts.size.md};
  font-family: ${({ theme }) => theme.fonts.family.semiBold};
  margin-top: 21px;
` 
export const Container = styled.View`
  flex: 1;
  background: ${({ theme }) => theme.colors.black};
  padding: ${({ theme }) => theme.sizes.sm};
`

export const Counter = styled.Text`
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.fonts.size.md};
  font-family: ${({ theme }) => theme.fonts.family.mediumn};
  flex: 1;
  text-align: center;
`

export const Info = styled.Text`
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.fonts.size.sm};
  font-family: ${({ theme }) => theme.fonts.family.mediumn};
`

export const Thumb = styled.Image`
  width: 100%;
  height: ${RFValue(184)}px;
  border-radius: ${({ theme }) => theme.borderRadius.md};
`

export const Description = styled.Text`
  color: ${({ theme }) => theme.colors.darkGray};
  font-size: ${({ theme }) => theme.fonts.size.xm};
  font-family: ${({ theme }) => theme.fonts.family.mediumn};
  margin-top: 21px;
`