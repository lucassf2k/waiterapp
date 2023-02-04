import * as S from './styles';

import logoImg from '../../assets/images/logo.svg';

export function Header() {
  return (
    <S.Container>
      <S.Content>
        <div className="page-details">
          <h1>Pedidos</h1>
          <h2>Acomponhe os pedidos dos clientes</h2>
        </div>

        <img src={logoImg} alt="WAITERAPP" />
      </S.Content>
    </S.Container>
  );
}
