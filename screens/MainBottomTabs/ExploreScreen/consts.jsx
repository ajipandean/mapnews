import { Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

export default {
  POST_CARD_WIDTH: width * 0.8,
  POST_CARD_INSET: width * 0.1 - 5,
};
