import React from 'react';
import { View } from 'react-native';
import { Text, Avatar, Button } from 'react-native-elements';

import accountOverviewStyles from './styles';

export default ({ user, navigate }) => {
  const styles = accountOverviewStyles();
  const avatarPlaceholder = 'https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png';

  if (!user) return <View />;
  return (
    <View style={[styles.center_horizontal, styles.padded_vertical]}>
      <Avatar
        rounded
        size={100}
        source={{ uri: user.photoURL || avatarPlaceholder }}
      />
      <View style={[styles.margined_vertical, styles.center_horizontal]}>
        <Text style={styles.username}>{user.displayName || 'anonymus'}</Text>
        <Text style={styles.email}>{user.email}</Text>
      </View>
      <Button
        type="clear"
        title="Ubah profil"
        buttonStyle={styles.button}
        containerStyle={[styles.compact]}
        onPress={() => navigate('update-profile', { user })}
      />
    </View>
  );
};
