import styled from 'styled-components/native'

export const Container = styled.View`
  flex: 1;
  padding: ${({ theme }) => theme.sizes.sm};
  justify-content: center;
`

export const Logo = styled.Image`
  width: 120px;
`