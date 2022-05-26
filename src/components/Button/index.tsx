import { memo, ComponentProps } from 'react'
import { RectButtonProps, GestureHandlerRootView } from 'react-native-gesture-handler'
import { ActivityIndicator } from 'react-native'

import { useTheme } from 'src/hooks/useTheme'

import { getIcon } from 'src/components/IconButton/icons'

import * as Styles from './styles'

type NativeProps = Pick<RectButtonProps, 'onPress'>

interface ButtonProps extends Styles.ButtonProps, NativeProps {
  children?: string
  iconLeft?: ComponentProps<typeof getIcon>
  iconRight?: ComponentProps<typeof getIcon>
  disabled?: boolean
  isLoading?: boolean
}

function BaseButton({ children, iconLeft, iconRight, disabled, isLoading, ...props }: ButtonProps) {
  const { activityOpacity, buttons, colors } = useTheme()

  return (
    <GestureHandlerRootView>
      <Styles.Button activeOpacity={activityOpacity} enabled={!disabled} {...props}>
        {iconLeft &&
          getIcon({
            color: props?.variante ? buttons[props?.variante].color : colors.black,
            size: 16,
            ...iconLeft,
          })}
        {isLoading ? (
          <ActivityIndicator
            size={20}
            color={props?.variante ? buttons[props?.variante].color : colors.black}
          />
        ) : (
          <Styles.Text variante={props?.variante}>{children}</Styles.Text>
        )}

        {iconRight &&
          getIcon({
            color: props?.variante ? buttons[props?.variante].color : colors.black,
            size: 16,
            ...iconRight,
          })}
      </Styles.Button>
    </GestureHandlerRootView>
  )
}

export const Button = memo(BaseButton)
