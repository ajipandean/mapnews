import React, { useState, useContext } from 'react';
import { View } from 'react-native';
import { Input, Button } from 'react-native-elements';

import toast from '../../helpers/toast';
import loginFormInputStyles from './styles';
import AuthContext from '../../contexts/authContext';

export default ({ mode }) => {
  const { register, login } = useContext(AuthContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [shown, setShown] = useState(false);
  const [loading, setLoading] = useState(false);

  const styles = loginFormInputStyles();

  const validateInput = () => {
    if (email.length <= 0) throw new Error('Email cannot be empty');
    if (password.length <= 0) throw new Error('Password cannot be empty');
    if (mode === 'register') {
      if (confirmPassword !== password) throw new Error("Confirm password doesn't match");
    }
  };
  const handleRegister = async () => {
    setLoading(true);
    try {
      validateInput();
      await register(email, password);
    } catch (err) {
      toast(err.message);
    } finally {
      setLoading(false);
    }
  };
  const handleLogin = async () => {
    setLoading(true);
    try {
      validateInput();
      await login(email, password);
    } catch (err) {
      toast(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Input
        autoCapitalize="none"
        textContentType="emailAddress"
        label="Alamat email"
        placeholder="ashiap@example.com"
        returnKeyType="next"
        containerStyle={styles.no_horizontal_padding}
        value={email}
        onChangeText={(v) => setEmail(v)}
        leftIcon={{
          name: 'at',
          color: '#888',
          type: 'material-community',
        }}
      />
      <Input
        secureTextEntry={!shown}
        label="Kata sandi"
        placeholder="********"
        textContentType="password"
        returnKeyType={mode === 'register' ? 'next' : 'go'}
        containerStyle={[styles.no_horizontal_padding]}
        value={password}
        onChangeText={(v) => setPassword(v)}
        leftIcon={{
          name: 'lock-outline',
          type: 'material-community',
          color: '#888',
        }}
        rightIcon={{
          name: shown ? 'eye-off-outline' : 'eye-outline',
          color: '#888',
          type: 'material-community',
          onPress: () => setShown(!shown),
        }}
      />
      {mode === 'register' ? (
        <Input
          secureTextEntry={!shown}
          label="Konfirmasi kata sandi"
          placeholder="********"
          textContentType="newPassword"
          returnKeyType="go"
          containerStyle={[styles.no_horizontal_padding]}
          value={confirmPassword}
          onChangeText={(v) => setConfirmPassword(v)}
          leftIcon={{
            name: 'lock-outline',
            type: 'material-community',
            color: '#888',
          }}
          rightIcon={{
            name: shown ? 'eye-off-outline' : 'eye-outline',
            color: '#888',
            type: 'material-community',
            onPress: () => setShown(!shown),
          }}
        />
      ) : null}
      <View>
        <Button
          loading={loading}
          title={mode === 'register' ? 'Daftar akun' : 'Masuk'}
          titleStyle={styles.dark}
          buttonStyle={[styles.pills_radius, styles.bg_primary]}
          onPress={mode === 'register' ? handleRegister : handleLogin}
        />
      </View>
    </>
  );
};
