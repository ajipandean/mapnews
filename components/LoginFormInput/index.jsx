import React from 'react';
import { View } from 'react-native';
import { Input, Button } from 'react-native-elements';

import loginFormInputStyles from './styles';

export default () => {
  const styles = loginFormInputStyles();

  return (
    <>
      <Input
        label="Email"
        containerStyle={styles.no_horizontal_padding}
        leftIcon={{
          name: 'at',
          color: '#888',
          type: 'material-community',
        }}
      />
      <Input
        label="Password"
        containerStyle={styles.no_horizontal_padding}
        leftIcon={{
          name: 'lock-outline',
          type: 'material-community',
          color: '#888',
        }}
        rightIcon={{
          name: 'eye-outline',
          color: '#888',
          type: 'material-community',
          onPress: () => {},
        }}
      />
      <View>
        <Button title="Login" buttonStyle={styles.pills_radius} />
      </View>
    </>
  );
};
