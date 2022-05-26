import { useNavigation } from '@react-navigation/native'

import { BasicButton } from 'src/components'

import img from 'src/assets/onboard-final.png'

import { Flex } from 'src/theme/globalStyles'
import * as DefaultStyles from '../styles'
import * as Styles from './styles'

import { routePaths } from 'src/constants/routes'
import { useTheme } from 'src/hooks'

export function Done () {
  const navigation = useNavigation()

  const { colors } = useTheme()


  return (
    <DefaultStyles.SafeAreaView>
      <Styles.LinearGradiendContainer>
        <Styles.Image source={img} resizeMode="cover" />
        <Styles.LinearGradiend colors={['transparent', colors.black]} />
      </Styles.LinearGradiendContainer>
      <DefaultStyles.Container>
        <Styles.Container>
          <Flex marginBottom={45} column>
            <DefaultStyles.Title>You are already to go!</DefaultStyles.Title>
            <DefaultStyles.Subtitle>Thanks for taking your time to create account with us. Now is the fun part. Let's explore the app.</DefaultStyles.Subtitle>
          </Flex>
          <BasicButton>Continue</BasicButton>
        </Styles.Container>
      </DefaultStyles.Container>
    </DefaultStyles.SafeAreaView>
  )
}

