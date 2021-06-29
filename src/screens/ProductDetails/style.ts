import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
  container : {
    flex: 1,
    marginTop: 20,
    marginHorizontal: 20,
    flexDirection: 'column',
  },
  textContainer: {
    marginTop: 20,
    marginHorizontal: 20,
  },
  price: {
    color: theme.colors.on,
    fontFamily: theme.fonts.dm700,
    fontSize: 16,
  },
  title: {
    fontFamily: theme.fonts.mont700,
    fontSize: 28,
  },
  image: {
    alignSelf: 'center',
    marginVertical: 10,
  },
  description: {
    flex: 1,
    borderWidth: 2,
    marginVertical: 10
  },
  descriptionBox: {
    marginHorizontal: 10,
    marginVertical: 10,
  },
  descriptionTitle: {
    fontFamily: theme.fonts.dm700,
    fontSize: 16
  },
  descriptionContent: {
    fontFamily: theme.fonts.dm400,
    marginTop: 5,
    fontSize: 14
  },
  button: {
    flex: 0,
    justifyContent: 'flex-end',
    marginBottom: 10,
  },
});
