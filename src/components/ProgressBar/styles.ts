import styled from 'styled-components/native'
import { Dimensions } from 'react-native'

export const Container = styled.View`
  width: ${Dimensions.get('window').width - 80}px;
  height: 10px;
  background: ${({ theme }) => theme.colors.disabled};
  border-radius: 10px;
`

export const Progress = styled.View<{ percent?: number }>`
  height: 10px;
  width: ${({ percent = 0 }) => percent}%;
  background: #fff;
  border-radius: 10px;
`