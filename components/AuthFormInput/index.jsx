import React, { useState } from 'react';
import { View } from 'react-native';
import { Input, Button } from 'react-native-elements';

import loginFormInputStyles from './styles';

export default ({ mode }) => {
  const [shown, setShown] = useState(false);

  const styles = loginFormInputStyles();

  return (
    <>
      <Input
        label="Alamat email"
        placeholder="ashiap@example.com"
        containerStyle={styles.no_horizontal_padding}
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
          title={mode === 'register' ? 'Daftar akun' : 'Masuk'}
          titleStyle={styles.dark}
          buttonStyle={[styles.pills_radius, styles.bg_primary]}
        />
      </View>
    </>
  );
};
