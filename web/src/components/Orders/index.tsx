import { Order } from '../../types/Order';
import { OrdersBoard } from '../OrdersBoard';
import * as S from './styles';

const order: Order[] = [
  {
    '_id': '6384bbc53a0b035100f4cd33',
    'table': '123',
    'status': 'IN_PRODUCTION',
    'products': [
      {
        'product': {
          'name': 'Pizza quatro queijos',
          'imagePath': '1669588172510-quatro-queijos.png',
          'price': 40,
        },
        'quantity': 2,
        '_id': '6384bbc53a0b035100f4cd34'
      },
      {
        'product': {
          'name': 'Coca cola',
          'imagePath': '1669589874248-undefined',
          'price': 7.5,
        },
        'quantity': 2,
        '_id': '6384bbc53a0b035100f4cd35'
      }
    ],
  }
];

export function Orders() {
  return (
    <S.Container>
      <OrdersBoard
        icon="🕐"
        title="Fila de espera"
        orders={order}
      />
      <OrdersBoard
        icon="👩‍🍳"
        title="Em preparação"
        orders={[]}
      />
      <OrdersBoard
        icon="✅"
        title="Pronto"
        orders={[]}
      />
    </S.Container>
  );
}
