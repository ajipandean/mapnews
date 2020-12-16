import React from 'react';
import { ScrollView, View } from 'react-native';
import {
  Text, Header, Button, Avatar,
} from 'react-native-elements';

import profileScreenStyles from './styles';
import useTheme from '../../../hooks/useTheme';

export default () => {
  const { colors } = useTheme();

  const styles = profileScreenStyles();
  const avatarPlaceholder = 'https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png';

  return (
    <View style={styles.container}>
      <Header
        containerStyle={styles.header}
        backgroundColor={colors.surface}
        centerComponent={() => <Text h4>Profil</Text>}
      />
      <ScrollView style={styles.padded_horizontal}>
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
      </ScrollView>
    </View>
  );
};
