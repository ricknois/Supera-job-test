import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.secondary100,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: 50,
    borderRadius: 10,
    marginVertical: 10,
  },
  icon: {
    padding: 10,
  },
  input: {
    flex: 1,
  }
});
