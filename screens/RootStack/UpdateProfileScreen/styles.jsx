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
    center_horizontal: { alignItems: 'center' },
    margin_top: { marginTop: spacing * 3 },
    padded_horizontal: { paddingHorizontal: spacing * 3 },
    top_spaced: { marginTop: spacing * 2 },
    no_horizontal_padding: { paddingHorizontal: 0 },
    bg_primary: { backgroundColor: colors.primary },
  });
};
