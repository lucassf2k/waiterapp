import { StatusBar } from 'expo-status-bar';
import { Modal } from 'react-native';
import { CheckCircle } from '../Icons/CheckCircle';
import { Text } from '../Text';

import * as S from './styles';

interface OrderConfimedModalProps {
  visible: boolean;
  onOK: () => void;
}

export function OrderConfimedModal({ visible, onOK }: OrderConfimedModalProps) {
  return (
    <Modal
      visible={visible}
      animationType="fade"
    >
      <StatusBar style="dark" backgroundColor="#3C92DE" />

      <S.Container>
        <CheckCircle />
        <Text weight="600" size={20} color="#fff" style={{ marginTop: 12 }}>
          Pedido confirmado
        </Text>
        <Text color="#fff" opacity={0.9} style={{ marginTop: 4 }}>
          O pedido já entrou na fila de produção!
        </Text>

        <S.OKButton onPress={onOK}>
          <Text color="#3C92DE" weight="600">
            OK
          </Text>
        </S.OKButton>
      </S.Container>
    </Modal>
  );
}
