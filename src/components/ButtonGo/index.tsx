import React from 'react';
import { Text } from 'react-native';
import { RectButton, RectButtonProps } from 'react-native-gesture-handler';
import { styles } from './style';

type Props = RectButtonProps & {
  title: string;
  onPress?: Function;
}

export function ButtonGo({ title, onPress, ...rest } : Props) {
  return (
    <RectButton
      style={ styles.container }
      { ...rest }
      onPress={onPress}
    >
      <Text style={styles.title}>{ title }</Text>
    </RectButton>
  );
};
