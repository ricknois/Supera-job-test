import React from 'react';
import { View, Text, TextInput, TextInputProps } from 'react-native';
import { styles } from './style';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import { theme } from '../../global/styles/theme';


type Props = TextInputProps & {
   iconName: string;
 }

export function InputImg({
    iconName, ...rest
  } : Props) {
  return (
    <View style={styles.container}>
      <MaterialCommunityIcons
        name={iconName}
        size={24}
        color={theme.colors.secondary80}
        style={styles.icon}
      />
      <TextInput
        style={styles.input}
        { ...rest }
      />
    </View>
  );
};
