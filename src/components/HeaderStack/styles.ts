import styled from 'styled-components/native'

export interface TitleProps {
  titleColor?: string
}

export const Title = styled.Text<TitleProps>`
  color: ${({ theme, titleColor }) => titleColor || theme.colors.white};
  font-family: ${({ theme }) => theme.fonts.family.mediumn};
  font-size: ${({ theme }) => theme.fonts.size.md};
  margin-left: 13px;
`