import { StatusBar } from 'expo-status-bar'
import { memo } from 'react'

import { format } from 'date-fns'

import { Flex } from 'src/theme/globalStyles'

import * as Styles from './styles'
import { FlatList } from 'react-native-gesture-handler'
import { Card } from './components'

const data = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
  },
]

function BaseMain () {
  return (
    <>
      <StatusBar style="dark" />
      <Styles.Container>
        <Flex>
          <Flex column>
            <Styles.Username>Hello, Gustavo</Styles.Username>
            <Styles.Date>{format(new Date(), 'dd, MMM')}</Styles.Date>
          </Flex>
          <Styles.Avatar source={{ uri: 'https://github.com/censuradho.png' }}/>
        </Flex>
        <FlatList 
          data={data}
          horizontal
          keyExtractor={item => item.id}
          renderItem={({ item }) => (
            <Card {...item} />
          )}
        />
      </Styles.Container>
    </>
  )
}

export const Main = memo(BaseMain)