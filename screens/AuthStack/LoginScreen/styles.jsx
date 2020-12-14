import { StyleSheet } from 'react-native';

import useTheme from '../../../hooks/useTheme';

export default ({ statusBarHeight }) => {
  const { colors, spacing } = useTheme();

  return StyleSheet.create({
    top_spaced: { marginTop: spacing },
    padded_horizontal: { paddingHorizontal: spacing * 2 },
    container: {
      flex: 1,
      paddingTop: statusBarHeight,
      backgroundColor: colors.surface,
    },
    image: {
      width: '100%',
      height: 260,
      resizeMode: 'contain',
      marginBottom: spacing,
    },
    helper: {
      color: colors.placeholder,
      textAlign: 'center',
      marginBottom: spacing * 2,
    },
  });
};
