import { useNavigation } from "@react-navigation/native"
import { memo } from "react"
import {  View } from 'react-native'
import { Formik } from 'formik'

import { BasicButton,  FormInputField } from 'src/components'

import { routePaths } from "src/constants/routes"

import { Flex } from "src/theme/globalStyles"
import * as DefaultStyles from '../styles'

import { createAccountSchemaValidation } from "src/yupValidations/account"

import { useOnBoardContext } from "src/pages/public/OnBoard/OnBoardProvider"

import { useBooleanToggle } from "src/hooks/useBooleanToggle"

import { createUserWithEmailAndPassword } from 'src/lib/firebase/auth'
import { createUser } from "src/lib/firebase/firestore"
import { firebase } from "src/lib/firebase"

const baseDetails = {
  email: '',
  password: '',
  username: ''
}

function BaseAccount () {
  const context = useOnBoardContext()

  const navigation = useNavigation()

  const [isLoading, toggleIsLoading] = useBooleanToggle(false)

  const handleSubmit = async (values: typeof baseDetails) => {
    toggleIsLoading()
    try {
      const response = await createUserWithEmailAndPassword(values.email, values.password)
      await createUser({
        ...values,
        uid: response.user.uid
      })
      navigation.navigate('SIGN_IN')
      console.log(context)
    } catch (err) {
      console.log(err)
    } finally {
      toggleIsLoading()
    }
  }


  return (
    <DefaultStyles.SafeAreaView>
      <DefaultStyles.Container>
        <DefaultStyles.Content>
          <DefaultStyles.Title>Account</DefaultStyles.Title>
          <DefaultStyles.FormContainer>
            <Formik 
              initialValues={baseDetails} 
              onSubmit={handleSubmit} 
              // validationSchema={createAccountSchemaValidation}
            >
              {({ handleSubmit: onSubmit, handleChange, handleBlur, values }) => (
                <>
                  <Flex column>
                  <View style={{ marginBottom: 25 }}>
                    <FormInputField
                      name="email"
                      keyboardType="email-address"
                      placeholder="E-mail" 
                      handleChange={handleChange}
                      handleBlur={handleBlur}
                      returnKeyType="next"
                      autoCapitalize="none"
                      autoCorrect={false}
                      value={values.email}
                    />
                  </View>
                  <View style={{ marginBottom: 25 }}>
                  <FormInputField 
                    placeholder="Password"
                    secureTextEntry
                    name="password"
                    keyboardType="visible-password"
                    handleChange={handleChange}
                    handleBlur={handleBlur}
                    returnKeyType="next"
                    value={values.password}
                    />
                  </View>
                  <View style={{ marginBottom: 25 }}>
                    <FormInputField 
                      placeholder="User name"
                      secureTextEntry
                      name="username"
                      keyboardType="visible-password"
                      handleChange={handleChange}
                      handleBlur={handleBlur}
                      returnKeyType="next"
                      value={values.password}
                      />
                  </View>
                </Flex>
                <BasicButton
                  disabled={isLoading}
                  iconRight={{
                    name: 'arrowForward',
                    size: 16
                  }} 
                  onPress={() => onSubmit()}>Continue</BasicButton>
                </>
              )}
            </Formik>
          </DefaultStyles.FormContainer>
        </DefaultStyles.Content>
      </DefaultStyles.Container>
    </DefaultStyles.SafeAreaView>
  )
}

export const Account = memo(BaseAccount)
