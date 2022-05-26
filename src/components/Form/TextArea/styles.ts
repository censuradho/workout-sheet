import styled from 'styled-components/native'

export const Input = styled.TextInput`
  background: ${({ theme }) => theme.colors.blackLight};
  width: 100%;
  padding: 16px;
  border-radius: ${({ theme }) => theme.borderRadius.sm}
` 
