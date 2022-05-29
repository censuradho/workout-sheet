import { format } from 'date-fns'
import { StatusBar } from 'expo-status-bar'
import { memo, useEffect } from 'react'
import { Modal, TouchableOpacity } from 'react-native'

import { Box } from 'src/components'
import { Icon } from 'src/components/ButtonIcon/icons'
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
  onClose
}: ExecuteProps) {
  const { start, time, reset } = useTimer({
    autostart: visible
  })

  const handleClose = () => {
    reset()
    onClose?.()
  }

  
  return (
    <Modal visible={visible} animationType="slide">
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
      </Styles.Container>
    </Modal>
  )
}

export const Execute = memo(BaseExecute)