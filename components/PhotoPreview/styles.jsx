import { StyleSheet } from 'react-native';

export default (widthDimension) => StyleSheet.create({
  container: {
    height: widthDimension,
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
});
