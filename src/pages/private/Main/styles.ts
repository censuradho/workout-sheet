import styled from 'styled-components/native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { RFValue } from 'react-native-responsive-fontsize'

export const Container = styled(SafeAreaView)`
  flex: 1;
  background: ${({ theme }) => theme.colors.black};
  padding: ${RFValue(16)}px;
`

export const Username = styled.Text`
  font-size: ${({ theme }) => theme.fonts.size.md};
  font-family: ${({ theme }) => theme.fonts.family.semiBold};
  color: ${({ theme }) => theme.colors.white};
`

export const Date = styled.Text`
  font-size: ${({ theme }) => theme.fonts.size.sm};
  font-family: ${({ theme }) => theme.fonts.family.mediumn};
  color: ${({ theme }) => theme.colors.darkGray};
`

export const Avatar = styled.Image`
  width: ${RFValue(45)}px;
  height: ${RFValue(45)}px;
  border-radius: 45px;
`