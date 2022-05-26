import { TextInputProps } from 'react-native'

import { memo } from 'react'

import * as Styles from './styles'
import { useTheme } from 'src/hooks'

type NativeProps = Pick<
  TextInputProps,
  | 'onChangeText'
  | 'value'
  | 'placeholder'
  | 'multiline'
  | 'numberOfLines'
  | 'onBlur'
  | 'keyboardType'
  | 'secureTextEntry'
  | 'returnKeyType'
  | 'onSubmitEditing'
  | 'autoCapitalize'
  | 'autoCorrect'
>

type InputFieldProps = NativeProps

function BaseInputField({ value, ...props }: InputFieldProps) {
  const { colors } = useTheme()

  return <Styles.Input {...props} placeholderTextColor={colors.disabled} />
}

export const InputField = memo(BaseInputField)
