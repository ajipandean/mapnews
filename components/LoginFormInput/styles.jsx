import { StyleSheet } from 'react-native';

import useTheme from '../../hooks/useTheme';

export default () => {
  const { colors } = useTheme();

  return StyleSheet.create({
    no_horizontal_padding: { paddingHorizontal: 0 },
    pills_radius: { borderRadius: 100 },
    dark: { color: colors.surface },
    bg_primary: { backgroundColor: colors.primary },
  });
};
