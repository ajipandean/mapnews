import React from 'react';
import {
  Image, ScrollView, View, TouchableOpacity,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Text } from 'react-native-elements';
import Constants from 'expo-constants';

import loginScreenStyles from './styles';

import AuthFormInput from '../../../components/AuthFormInput';
import illustrations from '../../../assets/illustrations/mobile-login.png';

export default () => {
  const { navigate } = useNavigation();

  const styles = loginScreenStyles({
    statusBarHeight: Constants.statusBarHeight,
  });

  return (
    <View style={styles.container}>
      <ScrollView style={styles.padded_horizontal}>
        <Image style={styles.image} source={illustrations} />
        <AuthFormInput />
        <TouchableOpacity
          style={styles.top_spaced}
          onPress={() => navigate('register')}
        >
          <Text style={[styles.helper, styles.top_spaced]}>
            Belum punya akun? Daftar disini
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};
