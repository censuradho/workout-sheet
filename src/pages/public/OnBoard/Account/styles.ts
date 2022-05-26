import styled from 'styled-components/native'

import LogoSvg from 'src/assets/logo.svg'

export const Logo = styled(LogoSvg)`
  width: 120px;
  height: 120px;
  margin: 0 auto;
  margin-bottom: 32px;
`

export const Title = styled.Text`
  font-size: 26px;
  color: #fff;
  margin-bottom: 26px;
`

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  padding: 16px;
`
