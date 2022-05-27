import { StatusBar } from 'expo-status-bar'
import { memo } from 'react'

import { format } from 'date-fns'

import { Flex } from 'src/theme/globalStyles'

import * as Styles from './styles'
import { FlatList } from 'react-native-gesture-handler'
import { Card } from './components'
import { Box } from 'src/components'
import { addDays } from 'date-fns/esm'

const data = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    label: 'First Item',
    date: new Date(),
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    label: 'Second Item',
    date: addDays(new Date(), 1),
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    label: 'Third Item',
    date: addDays(new Date(), 2),
  },
]

function BaseMain () {
  return (
    <>
      <StatusBar style="dark" />
      <Styles.Container>
        <Box 
          flexDirection="row" 
          justifyContent="space-between"
          marginBottom={50}
          
        >
          <Box>
            <Styles.Username>Hello, Gustavo</Styles.Username>
            <Styles.Date>{format(new Date(), 'dd, MMM')}</Styles.Date>
          </Box>
          <Styles.Avatar source={{ uri: 'https://github.com/censuradho.png' }}/>
        </Box>
        <Styles.SectionTitle>Training  Weekly</Styles.SectionTitle>
        <Box>
          <FlatList 
            data={data}
            horizontal
            keyExtractor={item => item.id}
            renderItem={({ item, index }) => (
              <Card active={index === 0} {...item} />
            )}
          />
        </Box>
      </Styles.Container>
    </>
  )
}

export const Main = memo(BaseMain)