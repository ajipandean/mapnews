import { useMemo } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

import firebase from '../firebase.config';
import toast from '../helpers/toast';

export default (dispatch) => useMemo(() => ({
  register: async (email, password) => {
    try {
      const data = await firebase
        .auth()
        .createUserWithEmailAndPassword(email, password);
      const { uid } = data.user;
      await AsyncStorage.setItem('uid', uid);
      dispatch({ type: 'LOGIN', uid });
    } catch (err) {
      toast(err.message);
    }
  },
}));