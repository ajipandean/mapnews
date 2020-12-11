import { ToastAndroid } from 'react-native';

export default function useToastError(err) {
  ToastAndroid.show(err.message, ToastAndroid.LONG);
}
