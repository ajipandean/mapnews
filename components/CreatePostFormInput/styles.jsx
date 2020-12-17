import { StyleSheet } from 'react-native';

import useTheme from '../../hooks/useTheme';

export default () => {
  const { colors } = useTheme();

  return StyleSheet.create({
    container: {
      padding: 16,
    },
    post_title: {
      fontSize: 20,
      fontWeight: 'bold',
    },
    post_description: {
      fontSize: 16,
    },
  });
};
