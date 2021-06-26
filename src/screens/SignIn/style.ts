import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.secondary70
  },
  header: {
    marginTop: 106,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 51,
    fontFamily: theme.fonts.dm700,
    color: theme.colors.secondary100,
  },
  subtitle: {
    fontSize: 14,
    fontFamily: theme.fonts.dm700,
    color: theme.colors.secondary100,
  },
  content: {
    height: '30%',
    justifyContent: 'space-between',
    marginHorizontal: 25,
    marginTop: '75%',
  },
  forgotText: {
    fontFamily: theme.fonts.dm700,
    fontSize: 14,
    textAlign: 'center',
  },
  signUpContainer: {
    justifyContent: 'center',
    flexDirection: 'row',
    width: '100%',
  },
  signUp: {
    fontFamily: theme.fonts.dm400,
    fontSize: 14,
  },
  signUpTouch: {
    fontFamily: theme.fonts.dm400,
    color: theme.colors.on,
    fontSize: 14,
  }
})
