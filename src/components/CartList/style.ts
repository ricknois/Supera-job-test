import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';
export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginVertical: 20,
  },
  title: {
    fontFamily: theme.fonts.dm400,
    fontSize: 16,
  },
  price: {
    fontFamily: theme.fonts.dm700,
    fontSize: 14,
  },
  quantityContainer: {
    flex: 1,
    alignItems: 'flex-end',
    flexDirection: 'row',
  },
  quantityBtn: {
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 10,
    textAlign: 'center',
    width: 30,
    height: 30,
  },
  plusMinus: {
    textAlign: 'center',
    fontSize: 16,
    fontFamily: theme.fonts.dm700
  },
  quantity: {
    marginHorizontal: 10,
    fontSize: 16,
    fontFamily: theme.fonts.dm700
  }
});
