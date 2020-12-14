import { StyleSheet } from 'react-native';

export default function styles() {
  return StyleSheet.create({
    container: { flex: 1 },
    separator: { marginHorizontal: 4 },
    image: {
      width: 70,
      height: 70,
      resizeMode: 'cover',
    },
  });
}
