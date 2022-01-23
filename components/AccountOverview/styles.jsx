import { StyleSheet } from 'react-native';

import useTheme from '../../hooks/useTheme';

export default () => {
  const { radius, colors } = useTheme();

  return StyleSheet.create({
    margined_vertical: { marginVertical: 8 },
    padded_horizontal: { paddingHorizontal: 16 },
    padded_vertical: { paddingVertical: 16 },
    compact: { alignSelf: 'center' },
    center_horizontal: { alignItems: 'center' },
    username: {
      fontSize: 20,
      fontWeight: 'bold',
      marginBottom: 4,
    },
    email: {
      color: colors.placeholder,
    },
    button: {
      paddingHorizontal: 16,
      borderRadius: radius.pills,
      borderWidth: 1,
      borderColor: colors.divider,
    },
  });
};
