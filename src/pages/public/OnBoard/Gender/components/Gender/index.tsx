import { memo } from "react"

import { RectButton } from 'react-native-gesture-handler'

import SvgMale from 'src/assets/male-icon.svg'
import SvgFemale from 'src/assets/female-icon.svg'

import { GenderType, GENDER_TYPE } from "src/constants/gender"
import { useTheme } from "src/hooks"


import * as Styles from './styles'

interface GenderProps {
  value: GenderType,
  active?: boolean,
  onPress?: (value: string) => void
}

function BaseGender ({ value, active, onPress }: GenderProps) {

  const { colors, activityOpacity } = useTheme()

  const mapGender = (_type: string) => {
    const genders = {
      [GENDER_TYPE.female]: {
        label: 'Female',
        icon: <SvgFemale  fill={active ? colors.black : colors.white} />
      },
      [GENDER_TYPE.male]: {
        label: 'Male',
        icon: <SvgMale  fill={active ? colors.black : colors.white}  />
      },
    }

    return genders[_type]
  }

  return (
    <Styles.Container 
      active={active} 
      onPress={() => onPress?.(value)}
      activeOpacity={activityOpacity}
    >
        {mapGender(value).icon}
      <Styles.Text active={active}>
        {mapGender(value).label}
      </Styles.Text>
    </Styles.Container>
  )
}

export const Gender = memo(BaseGender)