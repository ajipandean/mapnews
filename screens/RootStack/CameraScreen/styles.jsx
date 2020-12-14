import { StyleSheet } from 'react-native';

export default function styles() {
  return StyleSheet.create({
    container: { flex: 1 },
    camera: { flex: 1 },
    bottom_container: {
      position: 'absolute',
      left: 0,
      right: 0,
      bottom: 0,
    },
  });
}
