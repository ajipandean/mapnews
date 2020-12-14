import { StyleSheet } from 'react-native';

export default ({ statusBarHeight }) => StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: statusBarHeight,
    backgroundColor: '#fff',
  },
});
