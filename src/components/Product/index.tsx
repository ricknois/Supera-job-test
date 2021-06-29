import { useNavigation } from '@react-navigation/native';
import React from 'react'
import { View, Text, Image } from 'react-native'
import { RectButton, RectButtonProps } from 'react-native-gesture-handler'
import { images } from '../../assets/images';
import { handleStringSize } from '../../utils/helper';
import { styles } from './style'


export type DataProps = {
  id: number;
  name: string;
  price: number;
  score: number;
  image: string;
  qtd?: number;
}

type Props = RectButtonProps & {
  data: DataProps,
}

export function Product({ data, ...rest }: Props) {
  const navigation = useNavigation();


  return (
    <RectButton {...rest} style={styles.container} onPress={() => navigation.navigate('Details', {data: data})}>
      <View style={styles.item}>
        <Image source={images[data.image]}  style={{width: 120, height: 120}} />
        <View style={styles.textContainer}>
          <Text style={styles.title}>{handleStringSize(data.name)}</Text>
          <Text style={styles.price}>{`USD ${data.price}`}</Text>
          <Text style={styles.score}>{`Score: ${data.score}`}</Text>
        </View>
      </View>
    </RectButton>
  )
}
