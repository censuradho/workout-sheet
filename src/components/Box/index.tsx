import { memo, ReactNode } from 'react'
import { View, ViewStyle as RootViewStyle } from 'react-native'


type ViewStyle =  Pick<RootViewStyle, 
  'alignItems' 
  | 'alignSelf'
  | 'alignContent'
  | 'justifyContent'
  | 'flex'
  | 'marginBottom'
  | 'marginRight'
  | 'marginLeft'
  | 'marginTop'
  | 'marginHorizontal'
  | 'marginVertical'
  | 'flexDirection'
  | 'backgroundColor'
>


interface BoxProps extends ViewStyle {
  children: ReactNode;
  fullWidth?: boolean
}


function BaseBox ({ children, fullWidth, ...props}: BoxProps) {
  return (
    <View style={{
      ...props,
      width: fullWidth ? '100%' : 'auto'
    }}>
      {children}
    </View>
  )
}

export const Box = memo(BaseBox)