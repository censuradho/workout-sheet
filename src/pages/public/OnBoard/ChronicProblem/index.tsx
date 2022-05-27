import { useNavigation } from '@react-navigation/native'
import { Formik } from 'formik'

import { BasicButton, FormInputField } from 'src/components'

import { useEffect, useState } from 'react'

import { Flex } from 'src/theme/globalStyles'
import * as DefaultStyles from '../styles'

import { routePaths } from 'src/constants/routes'

import { createChronicProblemSchemaValidation } from 'src/yupValidations/account'
import { useOnBoardContext } from '../OnBoardProvider'

const baseDetails = {
  chronic_problem: '',
}


export function ChronicProblem () {
  const navigation = useNavigation()
  const context = useOnBoardContext()

  const [details, setDetails] = useState(baseDetails)

  const handleSubmit = (values: typeof details) => {

    context?.onSave({
      chronic_problem: values.chronic_problem
    })

    navigation.navigate('ACCOUNT')
  }

  useEffect(() => {
    if (!context?.data.chronic_problem) return

    setDetails({
      chronic_problem: context?.data.chronic_problem
    })
  }, [])

  return (
    <DefaultStyles.SafeAreaView>
      <DefaultStyles.Container>
        <DefaultStyles.Content>
          <DefaultStyles.Title>Chronic Problem</DefaultStyles.Title>
          <DefaultStyles.Subtitle>optional</DefaultStyles.Subtitle>
          <DefaultStyles.FormContainer>
          <Formik
              initialValues={details} 
              onSubmit={handleSubmit} 
              // validationSchema={createChronicProblemSchemaValidation}
            >
              {({ handleSubmit: onSubmit, handleChange, handleBlur, values }) => (
                <>
                  <Flex alignItems="flex-start" >
                  <FormInputField
                    name="chronic_problem"
                    placeholder="describe" 
                    handleChange={handleChange}
                    handleBlur={handleBlur}
                    returnKeyType="next"
                    value={values.chronic_problem}
                    multiline 
                    numberOfLines={6} 
                  />
                  </Flex>
                  <BasicButton 
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

