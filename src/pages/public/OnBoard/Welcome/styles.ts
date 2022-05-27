import styled from 'styled-components/native'
import { ImageBackground as ImageBackgroundNative } from 'react-native'

export const Container = styled.View`
  flex: 1;
  background: ${({ theme }) => theme.colors.black};
`

export const ImageBackground = styled(ImageBackgroundNative).attrs(props => ({ ...props }))`
  flex: 1;
`

export const Title = styled.Text`
  font-size: 40px;
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.fonts.family.mediumn};
  margin-bottom: 93px;
`

export const Overlay = styled.View`
  background: rgba(0, 0, 0, .3);
  flex: 1;
  padding: 10px;
`

export const Box = styled.View`
  margin-top: auto;
  margin-bottom: 100px;
`

export const Span = styled.Text`
  font-family: ${({ theme }) => theme.fonts.family.mediumn};
  color: ${({ theme }) => theme.colors.white};
  font-size: 16px;
  margin-top: 16px;
  justify-content: center;
  align-items: center;
`

export const LinkLabel = styled.Text`
  font-size: 16px;
  color: ${({ theme }) => theme.colors.primary};
  font-family: ${({ theme }) => theme.fonts.family.mediumn};
`

export const Link = styled.TouchableOpacity`

`