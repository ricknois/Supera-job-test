import { StyleSheet } from "react-native";
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 104,
    paddingTop: getStatusBarHeight(),
    flexDirection: 'row',
    paddingHorizontal: 24,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.colors.primary
  },
  title: {
    flex: 1,
    fontFamily: theme.fonts.dm700,
    fontSize: 19,
    color: theme.colors.secondary100,
    textAlign: 'center',
  },
  button: {
  },
  cart: {
  },
  orders: {
    width: 18,
    height: 18,
    position: 'absolute',
    color: theme.colors.primary,
    backgroundColor: theme.colors.secondary100,
    right: -13,
    bottom: -9,
    textAlign: 'center',
    borderRadius: 9,
  }
})
