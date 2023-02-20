import { useState } from 'react';
import { FlatList } from 'react-native';

import { products } from '../../mocks/products';
import { Text } from '../Text';

import { formatCurrency } from '../../utils/formatCurrency';

import * as S from './styles';
import { PlusCircle } from '../Icons/PlusCircle';
import { ProductModal } from '../ProductModal';

import { IProduct } from '../../types/IProduct';

interface MenuProps {
  onAddToCart: (product: IProduct) => void;
}

export function Menu({ onAddToCart }: MenuProps) {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<IProduct | null>(null);

  function handleOpenModal(product: IProduct) {
    setIsModalVisible(true);
    setSelectedProduct(product);
  }

  return (
    <>
      <ProductModal
        visible={isModalVisible}
        onClose={() => setIsModalVisible(false)}
        product={selectedProduct}
        onAddToCart={onAddToCart}
      />

      <FlatList
        data={products}
        keyExtractor={(products) => products._id}
        style={{ marginTop: 32 }}
        ItemSeparatorComponent={S.Separator}
        contentContainerStyle={{ paddingHorizontal: 24 }}
        renderItem={({ item: product }) => (
          <S.Product onPress={() => handleOpenModal(product)}>
            <S.ProductImage
              source={{
                uri: `http://192.168.2.66:3001/uploads/${product.imagePath}`
              }}
            />

            <S.ProductDetails>
              <Text weight="600">
                {product.name}
              </Text>
              <Text size={14} color="#666" style={{ marginVertical: 8 }}>
                {product.description}
              </Text>
              <Text size={14} weight="600">
                {formatCurrency(product.price)}
              </Text>
            </S.ProductDetails>

            <S.AddToCartButton onPress={() => onAddToCart(product)}>
              <PlusCircle />
            </S.AddToCartButton>
          </S.Product>
        )}
      />
    </>
  );
}
