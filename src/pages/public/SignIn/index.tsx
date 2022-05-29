import { Formik } from 'formik'
import { memo } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import LogoSvg from 'src/assets/logo.svg'

import { Box, Button, FormInputField } from 'src/components'

import * as Styles from './styles'

interface SignInProps {}

const baseDetails = {
  email: '',
  password: '',
}

function BaseSignIn (props: SignInProps) {
  const handleSubmit = async (values: typeof baseDetails) => {
    console.log(values)
  }

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
                  name="password"
                  placeholder="Password"
                  handleBlur={handleBlur}
                  handleChange={handleChange}
                  value={values.email}
                />
              </Box>
              <Button onPress={() => onSubmit()}>Sign In</Button>
            </>
            )}
          </Formik>
        </Box>
      </Styles.Container>
    </SafeAreaView>
  )
}

export const SignIn = memo(BaseSignIn)