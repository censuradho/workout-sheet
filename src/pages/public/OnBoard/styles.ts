import { Platform, StatusBar } from 'react-native'
import styled from 'styled-components/native'

export const Title = styled.Text`
  font-size: 43px;
  font-family: ${({ theme }) => theme.fonts.family.semiBold};
  color: ${({ theme }) => theme.colors.white};
`


export const Subtitle = styled.Text`
  font-size: 16px;
  color: ${({ theme }) => theme.colors.disabled};
  font-family: ${({ theme }) => theme.fonts.family.mediumn};
  line-height: 32px;
`

export const Container = styled.KeyboardAvoidingView`
  flex: 1;
  padding: 16px;
  background: ${({ theme }) => theme.colors.black};
  
`

export const SafeAreaView = styled.SafeAreaView`
  background: ${({ theme }) => theme.colors.black};
  padding-top: ${Platform.OS === "android" ? StatusBar.currentHeight : 0}px;
  flex: 1;
`
export const Content = styled.View`
  flex: 1;
  padding: 70px 0 ;
  justify-content: flex-start;
`

export const FormContainer = styled.View`
  margin-top: 83px;
  flex: 1;
`