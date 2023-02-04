import { Text } from '../Text';
import * as S from './styles';

interface ButtonProps {
  children: string;
  onPress: () => void;
  disabled?: boolean;
}

export function Button({ children, onPress, disabled }: ButtonProps) {
  return (
    <S.Container onPress={onPress} disabled={disabled}>
      <Text weight="600" color="#FFF">
        {children}
      </Text>
    </S.Container>
  );
}
