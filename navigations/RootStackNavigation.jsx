import React, { useReducer, useEffect } from 'react';
import {
  createStackNavigator,
  CardStyleInterpolators,
} from '@react-navigation/stack';
import AsyncStorage from '@react-native-async-storage/async-storage';

import AuthContext from '../contexts/authContext';
import authMemo from '../memos/authMemo';
import toast from '../helpers/toast';
import authStackRegister from '../registers/authStackRegister';
import rootStackRegister from '../registers/rootStackRegister';

const { Navigator, Screen } = createStackNavigator();

const initialState = {
  uid: null,
  logout: false,
};

export default () => {
  const [state, dispatch] = useReducer((prevState, action) => {
    switch (action.type) {
      case 'RESTORE_UID':
      case 'LOGIN':
        return {
          ...prevState,
          uid: action.uid,
          logout: false,
        };
      case 'LOGOUT':
        return {
          ...prevState,
          uid: null,
          logout: true,
        };
      default:
        return prevState;
    }
  }, initialState);

  useEffect(() => {
    const restoreUid = async () => {
      try {
        await AsyncStorage.removeItem('uid');
        const uid = await AsyncStorage.getItem('uid');
        dispatch({ type: 'RESTORE_UID', uid });
      } catch (err) {
        toast(err.message);
      }
    };
    restoreUid();
  }, []);

  return (
    <AuthContext.Provider value={authMemo(dispatch)}>
      <Navigator
        screenOptions={{
          headerShown: false,
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        }}
      >
        {state.uid ? (
          <>
            {rootStackRegister.map((screen) => (
              <Screen
                key={screen.name}
                name={screen.name}
                component={screen.component}
                options={screen.options}
              />
            ))}
          </>
        ) : (
          <>
            {authStackRegister.map((screen) => (
              <Screen
                key={screen.name}
                name={screen.name}
                component={screen.component}
                options={screen.options}
              />
            ))}
          </>
        )}
      </Navigator>
    </AuthContext.Provider>
  );
};
