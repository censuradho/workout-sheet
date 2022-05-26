import { useNavigation } from '@react-navigation/native'
import { useEffect, useLayoutEffect, useState } from 'react'
import { Formik } from 'formik'

import { Button, FormInputField, InputField } from 'src/components'


import { Flex } from 'src/theme/globalStyles'
import * as DefaultStyles from '../styles'
import { routePaths } from 'src/constants/routes'
import { createHeightSchemaValidation } from 'src/yupValidations/account'
import { useOnBoardContext } from '../OnBoardProvider'

const baseHeight = {
  height: ''
}

export function Height () {
  const navigation = useNavigation()
  const context = useOnBoardContext()

  const [details, setDetails] = useState(baseHeight)


  const handleSubmit = (values: typeof details) => {
    context?.onSave({
      height: parseFloat(values.height)
    })
    navigation.navigate(routePaths.public.ON_BOARD.WEIGHT as any)
  }

  useLayoutEffect(() => {
    if (!context?.data.height) return

    setDetails({
      height: String(context?.data.height)
    })
  }, [context?.data.height])

  return (
    <DefaultStyles.SafeAreaView>
      <DefaultStyles.Container>
        <DefaultStyles.Content>
          <DefaultStyles.Title>Height</DefaultStyles.Title>
          <DefaultStyles.FormContainer>
          <Formik
              initialValues={details} 
              onSubmit={handleSubmit} 
              validationSchema={createHeightSchemaValidation}

            >
              {({ handleSubmit: onSubmit, handleChange, handleBlur, values }) => (
                <>
                  <Flex alignItems='flex-start'>
                    <FormInputField
                      keyboardType="number-pad"
                      handleBlur={handleBlur}
                      handleChange={handleChange}
                      value={values.height}
                      name="height"
                      placeholder="Enter your height here (in cm)" 
                    />
                  </Flex>
                  <Button 
                  iconRight={{
                    name: 'arowForward',
                    size: 16
                  }} 
                  variante="basePrimary" onPress={() => onSubmit()}>Continue</Button>
                </>
              )}
    
            </Formik>
          </DefaultStyles.FormContainer>
        </DefaultStyles.Content>
      </DefaultStyles.Container>
    </DefaultStyles.SafeAreaView>
  )
}

