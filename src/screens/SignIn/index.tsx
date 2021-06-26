import React from 'react'
import { View, Text, TouchableOpacity, KeyboardAvoidingView  } from 'react-native'
import { styles } from './style'
import { ButtonGo } from '../../components/ButtonGo';
import { InputImg } from '../../components/InputImg';
import { useNavigation } from '@react-navigation/native';

export function SignIn() {

  const navigation = useNavigation();
  function handleSignIn() {
    navigation.navigate('Home');
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>
          Supera Stop
        </Text>
        <Text style={styles.subtitle}>
          Your game store
        </Text>
      </View>

      <KeyboardAvoidingView  contentContainerStyle={styles.content} behavior="position" enabled>
        <InputImg placeholder="Email" iconName="email-outline" />
        <InputImg placeholder="Password" iconName="lock-outline" secureTextEntry/>
        <Text style={styles.forgotText}>Forgot Password</Text>
        <ButtonGo title="Sign In" onPress={handleSignIn}/>
        <View style={styles.signUpContainer}>
          <Text style={styles.signUp}>Didn’t have any account?</Text>
            <TouchableOpacity style={{ flexWrap: 'nowrap', marginLeft: 7 }}>
              <Text style={styles.signUpTouch}>Sign Up here</Text>
            </TouchableOpacity>
        </View>
      </KeyboardAvoidingView >
    </View>
  );
};
