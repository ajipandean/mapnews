import { StyleSheet } from 'react-native';

import useTheme from '../../../hooks/useTheme';

export default () => {
  const { colors, spacing, radius } = useTheme();

  return StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.surface,
    },
    button: {
      borderRadius: radius.pills,
    },
    padded_horizontal: { paddingHorizontal: spacing * 3 },
    state: {
      color: colors.placeholder,
      marginTop: spacing + 4,
      textAlign: 'center',
    },
  });
};
