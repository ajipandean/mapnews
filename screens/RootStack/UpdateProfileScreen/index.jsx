import React, { useState } from 'react';
import { useRoute } from '@react-navigation/native';
import { ScrollView, View } from 'react-native';
import { Button } from 'react-native-elements';

import updateProfileScreenStyles from './styles';
import UpdateProfileFormInput from '../../../components/UpdateProfileFormInput';

export default () => {
  const { params } = useRoute();
  const [photo, setPhoto] = useState(params.user.photoURL);
  const [username, setUsername] = useState(params.user.displayName);

  const styles = updateProfileScreenStyles();

  return (
    <View style={styles.container}>
      <ScrollView style={styles.padded_horizontal}>
        <UpdateProfileFormInput photo={photo} username={username} />
        <Button title="Update" buttonStyle={styles.button} />
      </ScrollView>
    </View>
  );
};
