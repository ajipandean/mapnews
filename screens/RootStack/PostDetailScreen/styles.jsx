import { StyleSheet } from 'react-native';

import useTheme from '../../../hooks/useTheme';

export default (width) => {
  const { colors } = useTheme();

  return StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.surface,
    },
    image_container: {
      width: '100%',
      height: width,
      borderBottomWidth: 1,
      borderColor: colors.divider,
    },
    image: {
      width: '100%',
      height: '100%',
      resizeMode: 'contain',
    },
  });
};
