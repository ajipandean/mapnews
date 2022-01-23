import { ToastAndroid } from 'react-native';

export default (message) => {
  ToastAndroid.show(message, ToastAndroid.LONG);
};
