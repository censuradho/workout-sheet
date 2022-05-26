import { memo } from "react";
import {  TextInputProps }  from 'react-native'

import { useTheme } from "src/hooks";

import * as Styles from './styles'

type NativeInputProps = Pick<TextInputProps, 'onChange' | 'value' | 'placeholder' | 'multiline' | 'numberOfLines'>

interface TextAreaProps extends NativeInputProps {}

function BaseTextArea (props: TextAreaProps) {
  const { colors } = useTheme()

  return (
    <Styles.Input {...props}  placeholderTextColor={colors.gray}/>
  )
}

export const TextArea = memo(BaseTextArea)
