import { ComponentProps, memo } from 'react'
import { ActivityIndicatorBase, TouchableOpacityProps } from 'react-native'
import { useTheme } from 'src/hooks'
import { getIcon } from '../IconButton/icons'

import * as Styles from './styles'

type RootTouchableOpacityProps = Pick<TouchableOpacityProps, 'onPress'>

interface BasicButtonProps extends RootTouchableOpacityProps, Styles.Variante {
  children?: string
  iconLeft?: ComponentProps<typeof getIcon>
  iconRight?: ComponentProps<typeof getIcon>
  disabled?: boolean
  isLoading?: boolean
}

function BaseBasicButton ({ 
  children, 
  iconLeft, 
  iconRight, 
  isLoading,
  variante = 'primary',
  ...props 
}: BasicButtonProps) {
  const { activityOpacity, basicButton, colors } = useTheme()

  const iconColor = basicButton?.[variante]?.color || colors.black
  const defaultIconSize = 16

  return (
    <Styles.Button activeOpacity={activityOpacity} {...props} {...props}>
        {iconLeft &&
          getIcon({
            color: iconColor,
            size: defaultIconSize,
            ...iconLeft,
          })}
        {isLoading ? (
          <ActivityIndicatorBase
            size={20}
            color={iconColor}
          />
        ) : (
          <Styles.Text variante={variante}>{children}</Styles.Text>
        )}

        {iconRight &&
          getIcon({
            color: iconColor,
            size: defaultIconSize,
            ...iconRight,
          })}
    </Styles.Button>
  )
}

export const BasicButton = memo(BaseBasicButton)