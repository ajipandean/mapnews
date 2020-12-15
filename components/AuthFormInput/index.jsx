import React, { useState, useContext } from 'react';
import { View } from 'react-native';
import { Input, Button } from 'react-native-elements';

import toast from '../../helpers/toast';
import loginFormInputStyles from './styles';
import AuthContext from '../../contexts/authContext';

export default ({ mode }) => {
  const { register } = useContext(AuthContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [shown, setShown] = useState(false);
  const [loading, setLoading] = useState(false);

  const styles = loginFormInputStyles();

  const handleRegister = async () => {
    setLoading(true);
    try {
      if (email.length <= 0) throw new Error('Email cannot be empty');
      if (confirmPassword !== password) {
        throw new Error("Confirm password doesn't match");
      }
      await register(email, password);
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
          onPress={handleRegister}
        />
      </View>
    </>
  );
};
