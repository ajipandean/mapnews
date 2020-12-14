import React from 'react';
import { View } from 'react-native';
import {
  Avatar, Accessory, Input, Button,
} from 'react-native-elements';

import updateProfileScreenStyles from './styles';

export default () => {
  const styles = updateProfileScreenStyles();

  return (
    <View style={styles.container}>
      <Avatar
        rounded
        size={100}
        containerStyle={{ alignSelf: 'center' }}
        onPress={() => {}}
        source={{
          uri:
            'https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png',
        }}
      >
        <Accessory size={32} />
      </Avatar>
      <Input
        label="Nama pengguna"
        placeholder="Contoh: Aji Pandean"
        containerStyle={[styles.no_horizontal_padding, styles.top_spaced]}
        rightIcon={{
          name: 'dice-6',
          color: '#888',
          type: 'material-community',
          onPress: () => {},
        }}
      />
      <Button title="Update" buttonStyle={styles.button} />
    </View>
  );
};
