import { MaterialIcons, Foundation } from '@expo/vector-icons'; 

export type IconNames = 'arrowLeft' | 'male' | 'arrowForward' | 'arrowBack' | 'whatShot' | 'trendingUp' | 'flag'

interface options {
  size?: number
  color?: string
  name: IconNames
}


export function getIcon ({ name, ...props }: options) {

  const icons = {
    arrowLeft: <MaterialIcons name="arrow-back" {...props}  />,
    male: <Foundation name="male-symbol" {...props} />,
    arrowForward: <MaterialIcons name="arrow-forward-ios" {...props}  />,
    arrowBack: <MaterialIcons name="arrow-back" {...props}  />,
    whatShot: <MaterialIcons name="whatshot" {...props}  />,
    trendingUp: <MaterialIcons name="trending-up" {...props}  />,
    flag: <MaterialIcons name="flag" {...props}  />,
  }

  return icons[name]
}

