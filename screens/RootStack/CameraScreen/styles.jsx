import { StyleSheet } from 'react-native';

export default function styles() {
  return StyleSheet.create({
    container: { flex: 1 },
    camera: { flex: 1 },
    top_container: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      padding: 8,
      alignItems: 'flex-end',
    },
    bottom_container: {
      position: 'absolute',
      left: 0,
      right: 0,
      bottom: 0,
    },
  });
}
