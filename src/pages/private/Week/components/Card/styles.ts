import styled from 'styled-components/native'

import { DefaultTheme } from 'styled-components'

import { RFValue } from 'react-native-responsive-fontsize'

type Variant = keyof Pick<DefaultTheme, 'cardWeek'>['cardWeek']

export interface Props {
  variant?: Variant
}

export const Container = styled.View.attrs(props => props)<Props>`
  background: ${({ theme, variant = 'primary' }) => theme.cardWeek[variant].background};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  padding: ${({ theme }) => theme.sizes.sm};
  width: 100%;
  height: ${RFValue(105)}px;
  justify-content: center;
`

export const DayLetter = styled.Text<Props>`
  font-family: ${({ theme }) => theme.fonts.family.mediumn};
  font-size: ${({ theme }) => theme.fonts.size.sm};
  color: ${({ theme, variant = 'primary' }) => theme.cardWeek[variant].dayLetter};
`


export const DayNumber = styled(DayLetter)<Props>`
  color: ${({ theme, variant = 'primary' }) => theme.cardWeek[variant].dayNumber};
  width: 50px;
`

export const Title = styled.Text<Props>`
  color: ${({ theme, variant = 'primary' }) => theme.cardWeek[variant].dayLetter};
  width: 100%;
  margin-left: 40px;
  font-family: ${({ theme }) => theme.fonts.family.mediumn};
  font-size: ${({ theme }) => theme.fonts.size.sm};
  padding: 0 ${({ theme }) => theme.sizes.sm};
`