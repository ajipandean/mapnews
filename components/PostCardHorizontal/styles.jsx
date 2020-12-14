import { StyleSheet } from 'react-native';

import useTheme from '../../hooks/useTheme';

export default function styles(width) {
  const { colors } = useTheme();

  return StyleSheet.create({
    container: {
      width,
      backgroundColor: colors.surface,
      borderRadius: 4,
      overflow: 'hidden',
      marginHorizontal: 8,
      flexDirection: 'row',
      elevation: 2,
    },
    photo: {
      width: 120,
      height: 120,
      resizeMode: 'cover',
    },
    post: {
      flex: 1,
      padding: 12,
    },
    title: {
      fontSize: 16,
      marginBottom: 8,
      fontWeight: 'bold',
    },
    author: {
      fontSize: 12,
      color: colors.placeholder,
    },
    timestamps: {
      fontSize: 12,
      color: colors.placeholder,
    },
  });
}
