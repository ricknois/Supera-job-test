import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 50,
    backgroundColor: theme.colors.on,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 10,
  },
  title: {
    fontSize: 16,
    fontFamily: theme.fonts.dm700,
    color: theme.colors.secondary100,
  }
});
