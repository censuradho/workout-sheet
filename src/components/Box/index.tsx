import { memo } from 'react'
import { View } from 'react-native'

// import * as Styles from './styles'

interface BoxProps {}

function BaseBox (props: BoxProps) {
  return (
    <View>
      
    </View>
  )
}

export const Box = memo(BaseBox)