import { ComponentProps, memo } from "react";

import { getIcon } from "src/components/IconButton/icons";

import { useTheme } from "src/hooks";

import { Flex } from "src/theme/globalStyles";
import * as Styles from './styles'

interface OptionProps {
  title: string;
  label: string;
  active?: boolean;
  icon: ComponentProps<typeof getIcon>['name']
  value: string;
  onPress?: (value: string) => void
}

function BaseOption ({ active, icon, ...props}: OptionProps) {
  const { colors, activityOpacity } = useTheme()

  return (
    <Styles.Container 
      active={active} 
      onPress={() => props?.onPress?.(props.value)}
      activeOpacity={activityOpacity}
    >
      <Flex>
        {getIcon({ name: icon, color: active ? colors.black : colors.white, size: 40 })}
      </Flex>
      <Flex column>
        <Styles.Title active={active}>{props.title}</Styles.Title>
        <Styles.Label active={active}>{props.label}</Styles.Label>
      </Flex>
    </Styles.Container>
  )
}

export const Option = memo(BaseOption)