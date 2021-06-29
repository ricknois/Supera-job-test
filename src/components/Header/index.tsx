import React, { ReactNode, useContext } from 'react'
import { View, Text } from 'react-native'
import { styles } from './style';
import { BorderlessButton, RectButton } from 'react-native-gesture-handler';
import CartIcon from '../../assets/cart-icon.svg';
import { storeContext } from '../../context/context';
import { Ionicons } from '@expo/vector-icons'; 
import { useNavigation } from '@react-navigation/native';

type Props = {
  title?: string;
  action?: ReactNode
}

export function Header({title, action, ...rest} : Props) {
  const { cartSize } = useContext(storeContext);
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      {action &&
        <RectButton onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={24} color="white" />      
        </RectButton>
      }
      <Text style={styles.title}>{ title }</Text>
      <BorderlessButton style={styles.button} onPress={() => navigation.navigate('Cart')}>
        <CartIcon width={35} height={35} style={styles.cart} />
        <Text style={styles.orders}>{cartSize}</Text>
      </BorderlessButton>
    </View>
  );
}