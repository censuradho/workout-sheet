import { StatusBar } from 'expo-status-bar'
import { memo } from 'react'

import { format } from 'date-fns'

import { Flex } from 'src/theme/globalStyles'

import * as Styles from './styles'

function BaseMain () {
  return (
    <>
      <StatusBar style="dark" />
      <Styles.Container>
        <Flex alignItems="flex-start">
          <Flex column>
            <Styles.Username>Hello, Gustavo</Styles.Username>
            <Styles.Date>{format(new Date(), 'dd, MMM')}</Styles.Date>
          </Flex>
          <Styles.Avatar source={{ uri: 'https://github.com/censuradho.png' }}/>
        </Flex>
      </Styles.Container>
    </>
  )
}

export const Main = memo(BaseMain)