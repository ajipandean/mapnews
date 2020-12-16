import React from 'react';
import { View } from 'react-native';
import { Text, Avatar, Button } from 'react-native-elements';

import accountOverviewStyles from './styles';

export default () => {
  const styles = accountOverviewStyles();
  const avatarPlaceholder = 'https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png';

  return (
    <View style={[styles.center_horizontal, styles.padded_vertical]}>
      <Avatar rounded size={100} source={{ uri: avatarPlaceholder }} />
      <View style={[styles.margined_vertical, styles.center_horizontal]}>
        <Text style={styles.username}>Anonymus</Text>
        <Text style={styles.email}>merth@merthlabs.com</Text>
      </View>
      <Button
        type="clear"
        title="Ubah profil"
        buttonStyle={styles.button}
        containerStyle={[styles.compact]}
      />
    </View>
  );
};
