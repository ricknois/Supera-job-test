import React, { useContext } from 'react'
import { View, Text, Image, ImageProps } from 'react-native'
import { DataProps } from '../../components/Product';
import { styles } from './style';
import { images } from '../../assets/images';
import { Header } from '../../components/Header';
import { ButtonGo } from '../../components/ButtonGo';
import { storeContext } from '../../context/context';


type RouteProps = {
  params: { data: DataProps };
}

type Props = ImageProps & {
  route: RouteProps;
}

export function ProductDetails({ route , ...rest }: Props) {
  const { cartSize, setCartSize, cartProducts, setCartProducts, setTotal, total } = useContext(storeContext)
  const { data } = route.params

  const handleCart = () => {
    let indexProd = 'notFound';
    setCartSize(cartSize + 1);
    if (cartProducts.length > 0) {
      cartProducts.forEach((product, index) => {
        if (product.id === data.id) {
          cartProducts[index].qtd++
          indexProd = 'found'
        };
      });
    }
    indexProd === 'found'? 
      setCartProducts(cartProducts)
    : setCartProducts([...cartProducts, {...data, qtd: 1}]);
    setTotal(total + data.price)
  };

  return (
    <>
      <Header action/>
      <View style={styles.container}>
        <View style={styles.textContainer}>
          <Text style={styles.price}>{`USD ${data.price}`}</Text>
          <Text style={styles.title}>{data.name}</Text>
        </View>  
        <Image source={images[data.image]}  style={styles.image} />
        <View style={styles.description}>
          <View style={styles.descriptionBox}>
            <Text style={styles.descriptionTitle}>Description</Text>
            <Text style={styles.descriptionContent}>{`Score: ${data.score}`}</Text>
            <Text style={styles.descriptionContent}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
              sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </Text>
          </View>
        </View>
        <View style={styles.button}>
          <ButtonGo title="Add To Cart" onPress={() => handleCart()} />
        </View>
      </View>
    </>
  );
}
