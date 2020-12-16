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
  login: async (email, password) => {
    try {
      const data = await firebase
        .auth()
        .signInWithEmailAndPassword(email, password);
      const { uid } = data.user;
      await AsyncStorage.setItem('uid', uid);
      dispatch({ type: 'LOGIN', uid });
    } catch (err) {
      toast(err.message);
    }
  },
  logout: async () => {
    try {
      await AsyncStorage.removeItem('uid');
      await firebase.auth().signOut();
      dispatch({ type: 'LOGOUT', uid: null });
    } catch (err) {
      toast(err.message);
    }
  },
}));
