import { useNavigation } from '@react-navigation/native'
import { ComponentProps, memo } from 'react'
import { DefaultTheme } from 'styled-components/native'
import { Box } from '../Box'
import { ButtonIcon } from '../ButtonIcon'


import * as Styles from './styles'

type BoxProps = Pick<ComponentProps<typeof Box>, 'backgroundColor'>

interface HeaderStackProps {
  titleStyle?: Styles.TitleProps;
  title?: string
  backButtonColor?: keyof DefaultTheme['colors']
  backButtonColorCustom?: string;
  headerStyle?: BoxProps
}

function BaseHeaderStack ({
  title,
  titleStyle = {},
  backButtonColorCustom,
  backButtonColor,
  headerStyle
}: HeaderStackProps) {
  const navigation = useNavigation()

  return (
    <Box 
      marginBottom={20}
      flexDirection="row"
      alignItems="center"
      {...(headerStyle || {})}
    >
    <ButtonIcon 
      icon={{ 
        name: 'arrow-back',
        color: backButtonColor,
        customColor: backButtonColorCustom
      }}
      onPress={() => navigation.goBack()}
    />
    {title && <Styles.Title {...titleStyle}>{title}</Styles.Title>}
  </Box>
  )
}

export const HeaderStack = memo(BaseHeaderStack)