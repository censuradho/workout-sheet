import { useNavigation } from '@react-navigation/native'
import { useEffect, useState } from 'react'

import { Option } from './component'
import { BasicButton } from 'src/components'

import { Flex } from 'src/theme/globalStyles'
import * as DefaultStyles from '../styles'

import { routePaths } from 'src/constants/routes'
import { GOAL_TYPES } from 'src/constants/onBoard'

import { useOnBoardContext } from '../OnBoardProvider'

export function FitLevel () {
  const navigation = useNavigation()
  const context = useOnBoardContext()

  const [fitLevel, setFitLevel] = useState('')

  const handleSubmit = () => {
    context?.onSave({
      fit_level: fitLevel
    })

    navigation.navigate(routePaths.public.ON_BOARD.CHRONIC_PROBLEM as any)
  }

  useEffect(() => {
    if (!context?.data.fit_level) return

    setFitLevel(context?.data.fit_level)
  }, [])

  return (
    <DefaultStyles.SafeAreaView>
      <DefaultStyles.Container>
        <DefaultStyles.Content>
          <DefaultStyles.Title>Fit level</DefaultStyles.Title>
            <DefaultStyles.FormContainer>
            <Flex 
              alignItems="flex-start" 
              column
            >
              <Option 
                label="Burne calories, burne fat" 
                title="Get fit"
                value={GOAL_TYPES.GET_FIT}
                active={fitLevel === GOAL_TYPES.GET_FIT}
                icon="whatShot"
                onPress={value => setFitLevel(value)}
              />
              <Option 
                label="get muscles, get strong" 
                title="Get strong"
                value={GOAL_TYPES.GET_STRONG}
                active={fitLevel === GOAL_TYPES.GET_STRONG}
                icon="trendingUp"
                onPress={value => setFitLevel(value)}
              />
              <Option 
                label="become more active" 
                title="Exercise" 
                icon="flag"
                active={fitLevel === GOAL_TYPES.EXERCISE}
                value={GOAL_TYPES.EXERCISE}
                onPress={value => setFitLevel(value)}
              />
            </Flex>
            <BasicButton 
              iconRight={{
                name: 'arrowForward',
                size: 16
              }}
              disabled={fitLevel.length === 0}
              onPress={handleSubmit}>Continue</BasicButton>
          </DefaultStyles.FormContainer>
        </DefaultStyles.Content>
      </DefaultStyles.Container>
    </DefaultStyles.SafeAreaView>
  )
}

