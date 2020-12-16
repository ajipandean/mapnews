import React from 'react';
import { View } from 'react-native';
import { Avatar, Accessory, Input } from 'react-native-elements';

import useTheme from '../../hooks/useTheme';
import updateProfileFormInputStyles from './styles';

export default ({ username, photo }) => {
  const { colors } = useTheme();

  const styles = updateProfileFormInputStyles();
  const avatarPlaceholder = 'https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png';

  return (
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
  );
};
