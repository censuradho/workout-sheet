import { colors } from 'src/theme/templates/colors'
import styled from 'styled-components/native'

interface Props {
  active?: boolean
}

export const Container = styled.TouchableOpacity<Props>`
  width: 100%;
  padding: 18px 16px;
  flex-direction: row;
  border-radius: ${({ theme }) => theme.borderRadius.md};
  background: ${({ active, theme }) => active ? theme.colors.primary : 'transparent'};
  margin-bottom: 28px;
  align-items: center;
  justify-content: center;

`

export const Title = styled.Text<Props>`
  color: ${({ active, theme }) => active ? theme.colors.black : colors.white};
  font-size: 16px;
  font-family: ${({ theme }) => theme.fonts.family.semiBold};
`

export const Label = styled.Text<Props>`
  color: ${({ active, theme }) => active ? theme.colors.black : colors.darkGray};
  font-size: 16px;
  font-family: ${({ theme }) => theme.fonts.family.mediumn};
`