import React, { useContext, useEffect, useState } from 'react'
import { View, Text, Image } from 'react-native'
import { DataProps } from '../Product';
import { images } from '../../assets/images';
import { styles } from './style';
import { RectButton } from 'react-native-gesture-handler';
import { storeContext } from '../../context/context';

type Props = {
  data: DataProps,
}

export function CartList({ data, ...rest } : Props) {
  const { cartSize, setCartSize, cartProducts, setCartProducts } = useContext(storeContext)
  const [quantity, setQuantity] = useState(data.qtd)
  


  const handleDelete = (index: number, qtd) => {
    if (qtd <= 0) {
      cartProducts.splice(index, 1);
      setCartProducts(cartProducts)
    }
  }

  const handleQuantity = (type: string) => {
    cartProducts.forEach((item, index) => {
      if (item.id === data.id) {
        if (type === 'plus') {
          cartProducts[index].qtd++
          setCartProducts(cartProducts)
          setQuantity(quantity + 1)
          setCartSize(cartSize + 1)
        } else {
          cartProducts[index].qtd--
          setCartProducts(cartProducts)
          setQuantity(quantity - 1)
          setCartSize(cartSize - 1)
          handleDelete(index, quantity - 1)
        }
      }
    });
  }


  return (
    <View>
      <View style={styles.container}>
        <Image source={images[data.image]}  style={{width: 120, height: 120}} />
          <View style={styles.textContainer}>
            <Text style={styles.title}>{data.name}</Text>
            <Text style={styles.price}>{`USD ${data.price}`}</Text>
            <View style={styles.quantityContainer}>
              <RectButton onPress={() => handleQuantity('minus')}>
                <View style={styles.quantityBtn}>
                  <Text style={styles.plusMinus}>-</Text>
                </View>
              </RectButton>
              <View style={{justifyContent: 'center', height: 30}}>
                <Text style={styles.quantity}>{quantity}</Text>
              </View>
              <RectButton onPress={() => handleQuantity('plus')}>
                <View style={styles.quantityBtn}>
                  <Text style={styles.plusMinus}>+</Text>
                </View>
              </RectButton>
            </View>
          </View>
      </View>
    </View>
  )
};
