import React from 'react'
import { View, Text } from 'react-native'
import { styles } from './style';
import { Header } from '../../components/Header/';
import { Products } from '../../components/Products';

export function Home() {
  return (
    <View style={styles.container}>
      <Header  title="Home"/>
      <Products />
    </View>
  );
}
