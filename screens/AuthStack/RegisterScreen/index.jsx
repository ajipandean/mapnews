import React from 'react';
import {
  Image, ScrollView, View, TouchableOpacity,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Text } from 'react-native-elements';
import Constants from 'expo-constants';

import loginScreenStyles from './styles';

import AuthFormInput from '../../../components/AuthFormInput';
import illustrations from '../../../assets/illustrations/having-fun.png';

export default () => {
  const { navigate } = useNavigation();

  const styles = loginScreenStyles({
    statusBarHeight: Constants.statusBarHeight,
  });

  return (
    <View style={styles.container}>
      <ScrollView style={styles.padded_horizontal}>
        <Image style={styles.image} source={illustrations} />
        <AuthFormInput mode="register" />
        <TouchableOpacity
          style={styles.top_spaced}
          onPress={() => navigate('login')}
        >
          <Text style={[styles.helper]}>Sudah punya akun? Login disini</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};
