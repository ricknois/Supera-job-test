import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
  container: {
    width: '50%',
    alignItems: 'center',
    marginVertical: 15,
  },
  item: {
    
  },
  textContainer: {
    marginTop: 10,
  },
  title: {
    textAlign: 'center',
    fontFamily: theme.fonts.dm400,
    fontSize: 16,
  },
  price: {
    textAlign: 'center',
    fontFamily: theme.fonts.dm700,
    fontSize: 14,
  },
  score: {
    textAlign: 'center',
    fontFamily: theme.fonts.dm400,
    fontSize: 12,
  },

})
