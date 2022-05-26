import { memo } from "react"
import { TouchableNativeFeedback, TouchableNativeFeedbackProps  } from "react-native"

import { getIcon } from "./icons"

import * as Styles from './styles'

type NativeButtonProps = Pick<TouchableNativeFeedbackProps, 'onPress'>

interface ButtonIconProps extends Partial<Styles.ButtonProps>, NativeButtonProps {
  color?: string
}

function BaseIconButton ({ size = 30, color, ...props }: ButtonIconProps) {
  return (
    <TouchableNativeFeedback  {...props}>
      <Styles.Button size={size}>
          {getIcon({ name: 'arrowLeft', size: (size - 5), color })}
      </Styles.Button>
    </TouchableNativeFeedback>
  )
}

export const IconButton = memo(BaseIconButton)