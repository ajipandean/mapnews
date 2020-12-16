import React, { useEffect } from 'react';
import { View } from 'react-native';
import { Avatar, Accessory, Input } from 'react-native-elements';
import * as ImagePicker from 'expo-image-picker';

import useTheme from '../../hooks/useTheme';
import toast from '../../helpers/toast';
import updateProfileFormInputStyles from './styles';

export default ({
  username, photo, setPhoto, setUsername,
}) => {
  const { colors } = useTheme();

  const styles = updateProfileFormInputStyles();
  const avatarPlaceholder = 'https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png';

  const grantingPermission = async () => {
    try {
      const { granted } = await ImagePicker.requestCameraRollPermissionsAsync();
      if (!granted) throw new Error('No access to media library');
    } catch (err) {
      toast(err.message);
    }
  };

  const handlePickPhoto = async () => {
    try {
      const { granted } = await ImagePicker.getCameraRollPermissionsAsync();
      if (granted) {
        const result = await ImagePicker.launchImageLibraryAsync({
          quality: 1,
          mediaTypes: ImagePicker.MediaTypeOptions.Image,
        });
        setPhoto(result.uri);
      } else {
        throw new Error('No access to media library');
      }
    } catch (err) {
      toast(err.message);
    }
  };

  useEffect(() => {
    grantingPermission();
  }, []);

  return (
    <View style={[styles.center_horizontal, styles.margin_top]}>
      <Avatar
        rounded
        size={100}
        onPress={handlePickPhoto}
        source={{ uri: photo || avatarPlaceholder }}
      >
        <Accessory size={32} />
      </Avatar>
      <Input
        label="Nama pengguna"
        placeholder="Aji Pandean"
        value={username}
        onChangeText={(v) => setUsername(v)}
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
