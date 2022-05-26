import { MaterialIcons, Foundation } from '@expo/vector-icons'; 

export type IconNames = 'arrowLeft' | 'male' | 'arowForward' | 'arowBack' | 'whatshot' | 'trendingUp' | 'flag'

interface options {
  size?: number
  color?: string
  name: IconNames
}


export function getIcon ({ name, ...props }: options) {

  const icons = {
    arrowLeft: <MaterialIcons name="arrow-back" {...props}  />,
    male: <Foundation name="male-symbol" {...props} />,
    arowForward: <MaterialIcons name="arrow-forward-ios" {...props}  />,
    arowBack: <MaterialIcons name="arrow-back" {...props}  />,
    whatshot: <MaterialIcons name="whatshot" {...props}  />,
    trendingUp: <MaterialIcons name="trending-up" {...props}  />,
    flag: <MaterialIcons name="flag" {...props}  />,
  }

  return icons[name]
}

