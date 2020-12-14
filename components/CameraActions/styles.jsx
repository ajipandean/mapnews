import { StyleSheet } from 'react-native';

import useTheme from '../../hooks/useTheme';

export default function styles() {
  const { colors } = useTheme();
  return StyleSheet.create({
    actions: {
      flexDirection: 'row',
      paddingVertical: 24,
      alignItems: 'center',
      justifyContent: 'center',
    },
    capture: {
      padding: 8,
      marginHorizontal: 52,
      borderRadius: 100,
      backgroundColor: 'rgba(255, 255, 255, 0.4)',
    },
    inner_capture: {
      width: 65,
      height: 65,
      borderRadius: 100,
      backgroundColor: colors.surface,
    },
  });
}
