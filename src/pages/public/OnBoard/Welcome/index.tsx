import { memo } from 'react'

import { useNavigation } from '@react-navigation/native'

import { Button } from 'src/components'

import * as Styles from './styles'
import { routePaths } from 'src/constants/routes'

function BaseWelcome () {
  const navigation = useNavigation()

  return (
      <Styles.Container>
        <Styles.ImageBackground 
          source={require('../../../../assets/onboard1.png')} 
          resizeMode="cover" 
          style={{ flex: 1 }}
        >
          <Styles.Overlay>
            <Styles.Box>
              <Styles.Title>Training sheet for your goals</Styles.Title>
              <Button 
                fullWidth
                onPress={() => navigation.navigate('GENDER')}
              >
                Create account
              </Button>
              <Styles.Span>Already a member? <Styles.LinkLabel>Sign in</Styles.LinkLabel></Styles.Span>
            </Styles.Box>
          </Styles.Overlay>
        </Styles.ImageBackground>
      </Styles.Container>

  )
}

export const Welcome = memo(BaseWelcome)
