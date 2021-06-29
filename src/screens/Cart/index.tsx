import React, { useContext } from 'react';
import { View, Text } from 'react-native';
import { FlatList } from 'react-native';
import { Header } from '../../components/Header';
import { storeContext } from '../../context/context';
import { CartList } from '../../components/CartList';
import { ButtonGo } from '../../components/ButtonGo';
import { styles } from './styles'


export function Cart() {
  const { cartProducts, total, shipping } = useContext(storeContext);

  return (
    <>
      <Header title="Shopping Cart" action/>
      <FlatList
        data={cartProducts}
        keyExtractor={(_item, index) => index.toString()}
        renderItem={({item}) => <CartList data={item}/>}
      />
      <View style={{width: '90%', alignSelf: 'center'}}>
        <Text style={styles.total}>{`Total: USD ${total}`}</Text>
        {shipping > 249 
          ? <Text style={styles.total}>{`Shipping: free`}</Text>
          : <Text style={styles.total}>{`Shipping: USD ${shipping}`}</Text>
        }
        <ButtonGo title="Proceed to Checkout"/>
      </View>
    </>
  )
}
