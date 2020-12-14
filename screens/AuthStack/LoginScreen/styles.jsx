import { StyleSheet } from 'react-native';

export default ({ statusBarHeight }) => StyleSheet.create({
  top_spaced: { marginTop: 16 },
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 16,
    paddingTop: statusBarHeight,
    backgroundColor: '#fff',
  },
  helper: {
    color: '#888',
    textAlign: 'center',
  },
});
