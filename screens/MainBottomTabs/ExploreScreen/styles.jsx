import { StyleSheet } from 'react-native';

import useTheme from '../../../hooks/useTheme';

export default function styles() {
  const { colors } = useTheme();

  return StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.surface,
    },
    map: { flex: 1 },
    slider: {
      position: 'absolute',
      left: 0,
      right: 0,
      bottom: 0,
    },
  });
}
