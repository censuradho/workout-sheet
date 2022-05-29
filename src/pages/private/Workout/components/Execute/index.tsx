import { format } from 'date-fns'
import { StatusBar } from 'expo-status-bar'
import { memo, useEffect } from 'react'
import { Modal, TouchableOpacity } from 'react-native'

import { Box, Icon } from 'src/components'

import { useTimer } from 'src/hooks'

import type { Exercise } from 'src/mock'

import * as Styles from './styles'

interface ExecuteProps {
  visible?: boolean;
  onClose?: () => void;
  data?: Exercise | null
}

function BaseExecute ({
  visible = false,
  onClose,
  data
}: ExecuteProps) {
  const { start, time, reset } = useTimer({
    autostart: visible
  })

  const handleClose = () => {
    reset()
    onClose?.()
  }

  
  return (
    <Modal 
      visible={visible} 
      animationType="slide"
      onRequestClose={handleClose}
    >
      <StatusBar style="light" backgroundColor="#000" translucent />
      <Styles.Container>
        <Box
          flexDirection="row"
          fullWidth 
          justifyContent="space-between" 
          alignItems="center"
        >
          <TouchableOpacity onPress={handleClose}>
            <Icon name="close" />
          </TouchableOpacity>
          <Styles.Counter>{format(new Date(time), 'mm:ss')}</Styles.Counter>
        </Box>
        <Box flex={1} marginTop={51}>
          <Styles.Thumb source={{ uri: data?.thumb }} />
          <Styles.Title>{data?.label}</Styles.Title>
          <Box 
            flexDirection="row" 
            justifyContent="space-between"
            marginTop={20}
          >
            <Styles.Info>{data?.repeat || 'Max repeats'}</Styles.Info>
            <Styles.Info>{`${data?.series} series`}</Styles.Info>
          </Box>
          <Box 
            flexDirection="row" 
            justifyContent="space-between"
            marginTop={20}
          >
            <Styles.Info>{`${data?.weight} weight`}</Styles.Info>
            <Styles.Info>{`${data?.rest} rest`}</Styles.Info>
          </Box>
          <Styles.Description>{data?.description}</Styles.Description>
        </Box>
      </Styles.Container>
    </Modal>
  )
}

export const Execute = memo(BaseExecute)