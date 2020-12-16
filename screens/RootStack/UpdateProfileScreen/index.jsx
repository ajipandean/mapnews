import React, { useState } from 'react';
import { useRoute } from '@react-navigation/native';
import { ScrollView, View } from 'react-native';
import {
  Avatar, Accessory, Input, Button,
} from 'react-native-elements';

import updateProfileScreenStyles from './styles';
import useTheme from '../../../hooks/useTheme';

export default () => {
  const { colors } = useTheme();
  const { params } = useRoute();
  const [photo, setPhoto] = useState(params.user.photoURL);
  const [username, setUsername] = useState(params.user.displayName);

  const styles = updateProfileScreenStyles();
  const avatarPlaceholder = 'https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png';

  return (
    <View style={styles.container}>
      <ScrollView style={styles.padded_horizontal}>
        <View style={[styles.center_horizontal, styles.margin_top]}>
          <Avatar
            rounded
            size={100}
            onPress={() => {}}
            source={{ uri: photo || avatarPlaceholder }}
          >
            <Accessory size={32} />
          </Avatar>
          <Input
            label="Nama pengguna"
            placeholder="Aji Pandean"
            value={username}
            containerStyle={[styles.no_horizontal_padding, styles.top_spaced]}
            leftIcon={{
              name: 'account',
              type: 'material-community',
              color: colors.placeholder,
            }}
            rightIcon={{
              name: 'dice-6',
              color: '#888',
              type: 'material-community',
              onPress: () => {},
            }}
          />
        </View>
        <Button title="Update" buttonStyle={styles.button} />
      </ScrollView>
    </View>
  );
};
