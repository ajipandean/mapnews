import { StyleSheet } from 'react-native';

import useTheme from '../../../hooks/useTheme';

export default () => {
  const { colors } = useTheme();

  return StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.surface,
    },
  });
};
