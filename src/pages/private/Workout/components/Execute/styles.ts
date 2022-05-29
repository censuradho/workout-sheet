import styled from 'styled-components/native'

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