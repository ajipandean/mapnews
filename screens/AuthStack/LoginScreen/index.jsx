import React from 'react';
import { View } from 'react-native';
import Constants from 'expo-constants';

import loginScreenStyles from './styles';

import LoginFormInput from '../../../components/LoginFormInput';

export default () => {
  const styles = loginScreenStyles({
    statusBarHeight: Constants.statusBarHeight,
  });

  return (
    <View style={styles.container}>
      <LoginFormInput />
    </View>
  );
};
