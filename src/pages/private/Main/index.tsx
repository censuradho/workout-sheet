import { StatusBar } from 'expo-status-bar'
import { memo } from 'react'

import { format } from 'date-fns'

import { Flex } from 'src/theme/globalStyles'

import * as Styles from './styles'
import { FlatList } from 'react-native-gesture-handler'
import { Card } from './components'
import { Box } from 'src/components'
import { addDays } from 'date-fns/esm'

import { months } from 'src/mock'

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
            data={months}
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