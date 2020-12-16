import React, { useState } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import { ScrollView, View } from 'react-native';
import { Button } from 'react-native-elements';

import updateProfileScreenStyles from './styles';
import firebase from '../../../firebase.config';
import toast from '../../../helpers/toast';
import UpdateProfileFormInput from '../../../components/UpdateProfileFormInput';

export default () => {
  const { params } = useRoute();
  const { navigate } = useNavigation();
  const [loading, setLoading] = useState(false);
  const [photo, setPhoto] = useState(params.user.photoURL);
  const [username, setUsername] = useState(params.user.displayName);

  const styles = updateProfileScreenStyles();

  const handleUpdateProfile = async () => {
    setLoading(true);
    try {
      const response = await fetch(photo);
      const blob = await response.blob();
      const formattedUsername = username.split(' ').join('');
      const ref = firebase
        .storage()
        .ref('photo_profile')
        .child(`${Date.now()}_${formattedUsername}.jpg`);
      const snapshot = await ref.put(blob, { contentType: 'image/jpeg' });
      const downloadURL = await snapshot.ref.getDownloadURL();
      await params.user.updateProfile({
        photoURL: downloadURL,
        displayName: username,
      });
      navigate('main-bottom-tabs', { screen: 'profile' });
    } catch (err) {
      toast(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <ScrollView style={styles.padded_horizontal}>
        <UpdateProfileFormInput
          photo={photo}
          username={username}
          setPhoto={setPhoto}
          setUsername={setUsername}
        />
        <Button
          loading={loading}
          title="Update"
          buttonStyle={styles.button}
          onPress={handleUpdateProfile}
        />
      </ScrollView>
    </View>
  );
};
