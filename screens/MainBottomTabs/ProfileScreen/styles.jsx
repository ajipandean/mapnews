import { StyleSheet } from 'react-native';

import useTheme from '../../../hooks/useTheme';

export default () => {
  const { colors } = useTheme();

  return StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.surface,
    },
    padded_horizontal: { paddingHorizontal: 16 },
    header: {
      alignSelf: 'center',
      borderBottomWidth: 1,
      borderColor: colors.divider,
    },
  });
};
