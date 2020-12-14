import React, { useState } from 'react';
import { View } from 'react-native';
import { Input, Button } from 'react-native-elements';

import loginFormInputStyles from './styles';

export default () => {
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
        secureTextEntry={shown}
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
      <View>
        <Button title="Masuk" buttonStyle={styles.pills_radius} />
      </View>
    </>
  );
};
