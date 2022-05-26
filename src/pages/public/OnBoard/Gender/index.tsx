import { useNavigation } from '@react-navigation/native'

import { BasicButton, Button } from 'src/components'
import { Gender as GenderCard } from './components'

import { useEffect, useState } from 'react'

import { Flex } from 'src/theme/globalStyles'
import * as DefaultStyles from '../styles'
import { routePaths } from 'src/constants/routes'
import { useOnBoardContext } from '../OnBoardProvider'

export function Gender () {
  const navigation = useNavigation()
  const context = useOnBoardContext()

  const [gender, setGender] = useState('')

  const handleSubmit = () => {
    context?.onSave({
      gender
    })

    navigation.navigate(routePaths.public.ON_BOARD.HEIGHT as any)
  }

  useEffect(() => {
    if (!context?.data.gender) return

    setGender(context?.data.gender)
  }, [])

  return (
    <DefaultStyles.SafeAreaView>
      <DefaultStyles.Container>
        <DefaultStyles.Content>
          <DefaultStyles.Title>Gender</DefaultStyles.Title>
          <DefaultStyles.FormContainer>
            <Flex alignItems="flex-start">
              <GenderCard 
                value="male" 
                onPress={value => setGender(value)} 
                active={gender === 'male'} 
              />
              <GenderCard 
                value="female" 
                onPress={value => setGender(value)} 
                active={gender === 'female'} />
            </Flex>
            <BasicButton
              iconRight={{
                name: 'arrowForward',
                size: 16
              }} 
              disabled={gender.length === 0}
              onPress={handleSubmit}>Continue</BasicButton>
          </DefaultStyles.FormContainer>
        </DefaultStyles.Content>
      </DefaultStyles.Container>
    </DefaultStyles.SafeAreaView>
  )
}

