import * as S from './styles';

import { Header } from '../components/Header';
import { Categories } from '../components/Categories';
import { Menu } from '../components/Menu';
import { Button } from '../components/Button';
import { TableModal } from '../components/TableModal';
import { useState } from 'react';
import { Cart } from '../components/Cart';
import { ICartItem } from '../types/ICartItem';
import { products } from '../mocks/products';

export function Main() {
  const [isTableModalVisible, setIsTableModalVisible] = useState(false);
  const [selectedTable, setSelectedTable] = useState('');
  const [cartItems, setCartItems] = useState<ICartItem[]>([
    {
      product: products[0],
      quantity: 1.
    },
    {
      product: products[1],
      quantity: 2.
    }
  ]);

  function handleSaveTable(table: string) {
    setSelectedTable(table);
  }

  function handleCancelOrder() {
    setSelectedTable('');
  }

  return (
    <>
      <S.Container>
        <Header
          selectedTable={selectedTable}
          onCancelOrder={handleCancelOrder}
        />

        <S.CateoriesContainer>
          <Categories />
        </S.CateoriesContainer>

        <S.MenuContainer>
          <Menu />
        </S.MenuContainer>

      </S.Container>
      <S.Footer>
        <S.FooterContainer>
          {!selectedTable && (
            <Button onPress={() => setIsTableModalVisible(true)}>
              Novo Pedido
            </Button>
          )}

          {selectedTable && (
            <Cart cartItems={cartItems} />
          )}
        </S.FooterContainer>
      </S.Footer>

      <TableModal
        visible={isTableModalVisible}
        onClose={() => setIsTableModalVisible(false)}
        onSave={handleSaveTable}
      />
    </>
  );
}
