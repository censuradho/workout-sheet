import { useNavigation } from '@react-navigation/native'

import { Button, FormInputField } from 'src/components'


import { Flex } from 'src/theme/globalStyles'
import * as DefaultStyles from '../styles'
import { routePaths } from 'src/constants/routes'
import { useEffect, useState } from 'react'
import { Formik } from 'formik'
import { createWeightSchemaValidation } from 'src/yupValidations/account'
import { useOnBoardContext } from '../OnBoardProvider'

const baseDetails = {
  weight: ''
}

export function Weight () {
  const navigation = useNavigation()
  const context = useOnBoardContext()

  const [details, setDetails] = useState(baseDetails)


  const handleSubmit = (values: typeof details) => {
    context?.onSave({
      weight: parseFloat(values.weight)
    })

    navigation.navigate(routePaths.public.ON_BOARD.GOALS as any)  
  }

  useEffect(() => {
    if (!context?.data.weight) return

    setDetails({
      weight: String(context?.data.weight)
    })
  }, [])

  return (
    <DefaultStyles.SafeAreaView>
      <DefaultStyles.Container>
        <DefaultStyles.Content>
          <DefaultStyles.Title>Weight</DefaultStyles.Title>
          <DefaultStyles.FormContainer>
          <Formik
              initialValues={details} 
              onSubmit={handleSubmit} 
              validationSchema={createWeightSchemaValidation}
            >
             {({ handleSubmit: onSubmit, handleChange, handleBlur, values }) => (
               <>
                <Flex alignItems="flex-start">
                  <FormInputField  
                    keyboardType="number-pad"
                    handleBlur={handleBlur}
                    handleChange={handleChange}
                    value={values.weight}
                    name="weight"
                    placeholder="Enter your weight here (in Kg)" 
                />
                </Flex>
                <Button 
                  iconRight={{
                    name: 'arrowForward',
                    size: 16
                  }} 
                  variante="basePrimary" 
                  onPress={() =>  onSubmit()}>Continue</Button>
              </>
             )}
            </Formik>

          </DefaultStyles.FormContainer>
        </DefaultStyles.Content>
      </DefaultStyles.Container>
    </DefaultStyles.SafeAreaView>
  )
}

