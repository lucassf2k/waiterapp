import * as S from './styles';

import { Header } from '../components/Header';
import { Categories } from '../components/Categories';
import { Menu } from '../components/Menu';
import { Button } from '../components/Button';
import { TableModal } from '../components/TableModal';
import { useState } from 'react';
import { Cart } from '../components/Cart';
import { ICartItem } from '../types/ICartItem';
import { IProduct } from '../types/IProduct';
import { ActivityIndicator } from 'react-native';

export function Main() {
  const [isTableModalVisible, setIsTableModalVisible] = useState(false);
  const [selectedTable, setSelectedTable] = useState('');
  const [cartItems, setCartItems] = useState<ICartItem[]>([]);
  const [isLoading] = useState(false);

  function handleSaveTable(table: string) {
    setSelectedTable(table);
    setIsTableModalVisible(false);
  }

  function handleResetOrder() {
    setSelectedTable('');
    setCartItems([]);
  }

  function handleAddToCart(product: IProduct) {
    if (!selectedTable) {
      setIsTableModalVisible(true);
    }

    setCartItems((prevState) => {
      const itemIndex = prevState.findIndex(
        (cartItem) => cartItem.product._id === product._id
      );

      if (itemIndex < 0) {
        return prevState.concat({
          quantity: 1,
          product,
        });
      }

      const newCartItem = [...prevState];
      const item = newCartItem[itemIndex];

      newCartItem[itemIndex] = {
        ...item,
        quantity: item.quantity + 1,
      };

      return newCartItem;
    });
  }

  function handleDecrementCart(product: IProduct) {
    setCartItems((prevState) => {
      const itemIndex = prevState.findIndex(
        (cartItem) => cartItem.product._id === product._id
      );

      const item = prevState[itemIndex];
      const newCartItem = [...prevState];

      if (item.quantity === 1) {
        newCartItem.splice(itemIndex, 1);

        return newCartItem;
      }

      newCartItem[itemIndex] = {
        ...item,
        quantity: item.quantity - 1,
      };

      return newCartItem;
    });
  }

  return (
    <>
      <S.Container>
        <Header
          selectedTable={selectedTable}
          onCancelOrder={handleResetOrder}
        />

        {isLoading && (
          <S.CenteredContainer>
            <ActivityIndicator color="#3C92DE" size="large" />
          </S.CenteredContainer>
        )}

        {!isLoading && (
          <>
            <S.CateoriesContainer>
              <Categories />
            </S.CateoriesContainer>

            <S.MenuContainer>
              <Menu onAddToCart={handleAddToCart} />
            </S.MenuContainer>
          </>
        )}

      </S.Container>
      <S.Footer>
        <S.FooterContainer>
          {!selectedTable && (
            <Button
              onPress={() => setIsTableModalVisible(true)}
              disabled={isLoading}
            >
              Novo Pedido
            </Button>
          )}

          {selectedTable && (
            <Cart
              cartItems={cartItems}
              onAdd={handleAddToCart}
              onDecrement={handleDecrementCart}
              onConfirmOrder={handleResetOrder}
            />
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
