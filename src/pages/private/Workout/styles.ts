import { RFPercentage } from 'react-native-responsive-fontsize'
import styled from 'styled-components/native'

export const Container = styled.View`
  flex: 1;
`

export const Header = styled.View`
  height: ${RFPercentage(30)}px;
  width: 100%;
  background: ${({ theme }) => theme.colors.white};
  padding: ${({ theme }) => theme.sizes.sm};
  justify-content: center;
`

export const WorkoutTitle = styled.Text`
  color: ${({ theme }) => theme.colors.black};
  font-size: ${({ theme }) => theme.fonts.size.md};
  font-family: ${({ theme }) => theme.fonts.family.semiBold};
`

export const Week = styled.Text`
  color: ${({ theme }) => theme.colors.darkGray};
  font-size: ${({ theme }) => theme.fonts.size.sm};
  font-family: ${({ theme }) => theme.fonts.family.mediumn};
`

export const FlatListContainer = styled.View`
  padding: ${({ theme }) => theme.sizes.sm};
  flex: 1;
  margin-top: 24px;
`

export const Footer = styled.View`
  padding: 0 ${({ theme }) => theme.sizes.sm}
`