import React from 'react';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';
import { StatusBar } from 'react-native';

import { DMSans_400Regular, DMSans_700Bold } from '@expo-google-fonts/dm-sans';
import { Montserrat_400Regular } from '@expo-google-fonts/montserrat';
import { Routes } from './src/routes';


export default function App() {
  const [fontsLoaded] = useFonts({
    DMSans_400Regular,
    DMSans_700Bold,
    Montserrat_400Regular
  });
  if (!fontsLoaded) {
    return <AppLoading />
  };
  return (
    <>
      <StatusBar 
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      <Routes />
    </>
  );
}
