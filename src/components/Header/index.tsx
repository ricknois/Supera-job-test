import React from 'react'
import { View, Text } from 'react-native'
import { styles } from './style';
import { BorderlessButton } from 'react-native-gesture-handler';
import CartIcon from '../../assets/cart-icon.svg';


type Props = {
  title: string;
}

export function Header({title, ...rest} : Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{ title }</Text>
      <BorderlessButton style={styles.button}>
        <CartIcon width={35} height={35} style={styles.cart} />
        <Text style={styles.orders}>5</Text>
      </BorderlessButton>
    </View>
  );
}