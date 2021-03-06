import { memo } from 'react'

import { BorderlessButton, BorderlessButtonProps, GestureHandlerRootView, BaseButton } from 'react-native-gesture-handler'

import { Icon, IconProps } from './icons'

export * from './icons'

interface ButtonIconProps extends Pick<BorderlessButtonProps, 'onPress'> {
  icon: IconProps
}

function BaseButtonIcon (props: ButtonIconProps) {
  return (
    <GestureHandlerRootView>
      <BorderlessButton {...props} style={{ padding: 10 }}>
        <Icon {...props.icon} />
      </BorderlessButton>
    </GestureHandlerRootView>
  )
}

export const ButtonIcon = memo(BaseButtonIcon)
