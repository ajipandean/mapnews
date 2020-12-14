import { StyleSheet } from 'react-native';

export default ({ statusBarHeight }) => StyleSheet.create({
  top_spaced: { marginTop: 16 },
  padded_horizontal: { paddingHorizontal: 16 },
  container: {
    flex: 1,
    paddingTop: statusBarHeight,
    backgroundColor: '#fff',
  },
  helper: {
    color: '#888',
    textAlign: 'center',
    marginBottom: 24,
  },
});
