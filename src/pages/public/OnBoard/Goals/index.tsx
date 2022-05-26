import { useNavigation } from '@react-navigation/native'
import { useEffect, useState } from 'react'

import { Option } from './component'
import { BasicButton } from 'src/components'

import { Flex } from 'src/theme/globalStyles'
import * as DefaultStyles from '../styles'
import { routePaths } from 'src/constants/routes'
import { GOAL_TYPES } from 'src/constants/onBoard'
import { useOnBoardContext } from '../OnBoardProvider'

export function Goals () {
  const navigation = useNavigation()
  const context = useOnBoardContext()

  const [goal, setGoal] = useState('')

  const toggleGoal = (value: string) => {
    setGoal(value)
  }

  const handleSubmit = () => {
    context?.onSave({
      goal
    })

    navigation.navigate(routePaths.public.ON_BOARD.FIT_LEVEL as any)
  }

  useEffect(() => {
    if (!context?.data.goal) return

    setGoal(context?.data.goal)
  }, [])

  return (
    <DefaultStyles.SafeAreaView>
      <DefaultStyles.Container>
        <DefaultStyles.Content>
          <DefaultStyles.Title>Goals</DefaultStyles.Title>
          <DefaultStyles.FormContainer>
            <Flex 
              alignItems="flex-start" 
              column
            >
              <Option 
                label="Burne calories, burne fat" 
                title="Get fit"
                value={GOAL_TYPES.GET_FIT}
                active={goal === GOAL_TYPES.GET_FIT}
                icon="whatShot"
                onPress={toggleGoal}
              />
              <Option 
                label="get muscles, get strong" 
                title="Get strong"
                value={GOAL_TYPES.GET_STRONG}
                active={goal === GOAL_TYPES.GET_STRONG}
                icon="trendingUp"
                onPress={toggleGoal}
              />
              <Option 
                label="become more active" 
                title="Exercise" 
                icon="flag"
                active={goal === GOAL_TYPES.EXERCISE}
                value={GOAL_TYPES.EXERCISE}
                onPress={toggleGoal}
              />
            </Flex>
            <BasicButton
              disabled={goal.length === 0}
              iconRight={{
                name: 'arrowForward',
                size: 16
              }} 
              onPress={handleSubmit}>Continue</BasicButton>
          </DefaultStyles.FormContainer>
        </DefaultStyles.Content>
      </DefaultStyles.Container>
    </DefaultStyles.SafeAreaView>
  )
}

