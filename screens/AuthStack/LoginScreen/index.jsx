import React from 'react';
import { ScrollView, View, TouchableOpacity } from 'react-native';
import { Text } from 'react-native-elements';
import Constants from 'expo-constants';

import loginScreenStyles from './styles';

import LoginFormInput from '../../../components/LoginFormInput';

export default () => {
  const styles = loginScreenStyles({
    statusBarHeight: Constants.statusBarHeight,
  });

  return (
    <View style={styles.container}>
      <ScrollView style={styles.padded_horizontal}>
        <LoginFormInput />
        <TouchableOpacity style={styles.top_spaced}>
          <Text style={[styles.helper]}>Belum punya akun? Daftar disini</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};
