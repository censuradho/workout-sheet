import { StatusBar } from 'expo-status-bar'
import { memo } from 'react'
import { Modal, TouchableOpacity } from 'react-native'

import { Box } from 'src/components'
import { Icon } from 'src/components/ButtonIcon/icons'

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
          <TouchableOpacity onPress={onClose}>
            <Icon name="close" />
          </TouchableOpacity>
          <Styles.Counter>12:00</Styles.Counter>
        </Box>
      </Styles.Container>
    </Modal>
  )
}

export const Execute = memo(BaseExecute)