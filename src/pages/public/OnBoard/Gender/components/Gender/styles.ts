import { colors } from 'src/theme/templates/colors'
import styled from 'styled-components/native'

interface Props {
  active?: boolean
}

export const Container = styled.TouchableOpacity<Props>`
  width: 100%;
  max-width: 50%;
  padding: 16px;
  border-radius: ${({ theme }) => theme.borderRadius.md};
  background: ${({ active, theme }) => active ? theme.colors.primary : 'transparent'};
  align-items: center;
  justify-content: center;
  flex-direction: column;

`

export const Text = styled.Text<Props>`
  color: ${({ active, theme }) => active ? theme.colors.black : colors.white};
  font-size: 29px;
  font-family: ${({ theme }) => theme.fonts.family.semiBold};
  margin-top: 11px;
`