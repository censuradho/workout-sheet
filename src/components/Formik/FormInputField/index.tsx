import { ComponentProps, memo } from 'react'
import { ErrorMessage, FormikHandlers } from 'formik'

import { InputField } from 'src/components/Form'

import * as Styles from 'src/components/Formik/styles'
import { Flex } from 'src/theme/globalStyles'

type FormikProps = Pick<FormikHandlers, 'handleChange' | 'handleBlur'>

type RootInputFieldProps = ComponentProps<typeof InputField>

interface FormInputFieldProps
  extends Omit<RootInputFieldProps, 'onChangeText' | 'onBlur'>,
    FormikProps {
  name: string
}

function BaseFormInputField({ name, handleChange, handleBlur, ...props }: FormInputFieldProps) {
  return (
    <Flex column>
      <InputField {...props} onChangeText={handleChange?.(name)} onBlur={handleBlur?.(name)} />
      <ErrorMessage name={name}>
        {message => <Styles.ErrorMessage>{message}</Styles.ErrorMessage>}
      </ErrorMessage>
    </Flex>
  )
}

export const FormInputField = memo(BaseFormInputField)
