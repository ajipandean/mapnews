import { StyleSheet } from 'react-native';

import useTheme from '../../../hooks/useTheme';

export default ({ statusBarHeight }) => {
  const { colors } = useTheme();

  return StyleSheet.create({
    top_spaced: { marginTop: 16 },
    padded_horizontal: { paddingHorizontal: 16 },
    container: {
      flex: 1,
      paddingTop: statusBarHeight,
      backgroundColor: colors.surface,
    },
    helper: {
      color: colors.placeholder,
      textAlign: 'center',
      marginBottom: 24,
    },
  });
};
