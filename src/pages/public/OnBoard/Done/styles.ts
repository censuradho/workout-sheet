import styled from 'styled-components/native'
import { LinearGradient as NativeLinearGradient } from 'expo-linear-gradient';

export const LinearGradiend = styled(NativeLinearGradient)`
  height: 200px;
  z-index: 100;
  bottom: 200px;
`
export const LinearGradiendContainer = styled.View`
  z-index: 1;
`
export const Image = styled.Image`
  height: 350px;
  width: 100%;
  z-index: 1;
`

export const Container = styled.View`
  bottom: 150px;

`