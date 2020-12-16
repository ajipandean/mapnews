import { StyleSheet } from 'react-native';

import useTheme from '../../hooks/useTheme';

export default () => {
  const { spacing } = useTheme();

  return StyleSheet.create({
    center_horizontal: { alignItems: 'center' },
    margin_top: { marginTop: spacing * 3 },
    top_spaced: { marginTop: spacing * 2 },
    no_horizontal_padding: { paddingHorizontal: 0 },
  });
};
