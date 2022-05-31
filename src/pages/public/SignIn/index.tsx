import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { Formik } from 'formik'
import { memo, useRef } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import LogoSvg from 'src/assets/logo.svg'

import { Box, Button, FormInputField } from 'src/components'
import { useBooleanToggle } from 'src/hooks'
import { signInWithEmailAndPassword } from 'src/lib/firebase/auth'
import { RootStackParamList } from 'src/routes/types'

import * as Styles from './styles'

type SignInProps = NativeStackScreenProps<RootStackParamList, 'SIGN_IN'>;

const baseDetails = {
  email: '',
  password: '',
}

function BaseSignIn ({ navigation }: SignInProps) {
  const inputRef = useRef(null)
  const [isLoading, toggleIsLoading] = useBooleanToggle(false)

  const handleSubmit = async (values: typeof baseDetails) => {
    try {
      const { email, password } = values

      toggleIsLoading()
      await signInWithEmailAndPassword(email, password)
      navigation.navigate('MAIN')
    } catch (err) {

    } finally {
      toggleIsLoading()
    }
  }

  console.log(inputRef)
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Styles.Container>
        <LogoSvg height={100} />
        <Box marginTop={50}>
          <Formik
            initialValues={baseDetails}
            onSubmit={handleSubmit}
          >
            {({ handleSubmit: onSubmit, handleChange, handleBlur, values }) => (
              <>
                <Box marginBottom={16}>
                  <FormInputField
                    name="email"
                    placeholder="E-mail"
                    handleBlur={handleBlur}
                    handleChange={handleChange}
                    value={values.email}
                  />
                </Box>
                <Box marginBottom={16}>
                <FormInputField
                  autoCapitalize="none"
                  autoCorrect={false}
                  secureTextEntry
                  returnKeyType="go"
                  name="password"
                  placeholder="Password"
                  handleBlur={handleBlur}
                  handleChange={handleChange}
                  value={values.email}
                />
              </Box>
              <Button
                ref={inputRef}
                isLoading={isLoading}
                onPress={() => onSubmit()}
              >Sign In</Button>
            </>
            )}
          </Formik>
        </Box>
      </Styles.Container>
    </SafeAreaView>
  )
}

export const SignIn = memo(BaseSignIn)