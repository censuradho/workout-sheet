import { Ionicons } from '@expo/vector-icons'; 
import {  memo, ReactNode } from 'react';
import { useTheme } from 'src/hooks';
import { DefaultTheme } from 'styled-components/native';

type Colors = keyof DefaultTheme['colors']

type IconNames = 'close' | 'arrow-back'

export interface IconProps {
  size?: number
  color?: Colors;
  customColor?: string
  name: IconNames
}

function BaseIcon ({ 
  size = 18,
  color,
  customColor,
  name
}: IconProps) {
  const { colors } = useTheme()
    const currentColor = customColor || color || colors.white

  const icons: Record<IconNames, ReactNode> = {
    close: <Ionicons name="close" size={size} color={currentColor} />,
    'arrow-back': <Ionicons name="arrow-back" size={size} color={currentColor} />
  }

  return (
    <>{icons[name]}</>
  )
}

export const Icon = memo(BaseIcon)
