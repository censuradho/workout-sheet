import styled from 'styled-components/native'

export const Input = styled.TextInput`
  width: 100%;
  background: ${({ theme }) => theme.colors.blackLight};
  padding: 16px;
  font-size: 16px;
  border-radius: ${({ theme }) => theme.borderRadius.sm};
  color: ${({ theme }) => theme.colors.disabled};
`
