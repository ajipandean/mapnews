import React, { useEffect, useState } from 'react';
import MapView from 'react-native-maps';
import { useNavigation } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { View, ActivityIndicator } from 'react-native';
import { Icon } from 'react-native-elements';
import * as ImagePicker from 'expo-image-picker';
import * as Location from 'expo-location';

import exploreScreenStyles from './styles';
import useTheme from '../../../hooks/useTheme';
import toast from '../../../helpers/toast';
import firebase from '../../../firebase.config';
import PostMarker from '../../../components/PostMarker';

export default () => {
  const { colors } = useTheme();
  const { navigate } = useNavigation();
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);

  const styles = exploreScreenStyles();

  const handleRedirectToCamera = async () => {
    try {
      const location = await Location.requestPermissionsAsync();
      const gallery = await ImagePicker.requestCameraPermissionsAsync();
      if (!gallery.granted) throw new Error('No access to camera');
      if (!location.granted) throw new Error('No access to user location');
      const result = await ImagePicker.launchCameraAsync({
        allowsEditing: true,
        aspect: [1, 1],
        quality: 1,
      });
      if (!result.cancelled) navigate('create-post', { result });
    } catch (err) {
      toast(err.message);
    }
  };

  useEffect(() => {
    setLoading(true);
    const ref = firebase.firestore();
    const unsubscribe = ref.collection('posts').onSnapshot((snapshot) => {
      const container = [];
      snapshot.forEach((doc) => {
        container.push({ id: doc.id, ...doc.data() });
      });
      setPosts(container);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  return (
    <View style={styles.container}>
      {loading ? (
        <View style={styles.loading}>
          <ActivityIndicator size={52} color={colors.primary} />
        </View>
      ) : (
        <>
          <MapView style={styles.map}>
            {posts.map((post, index) => (
              <PostMarker
                key={`post-${index}`}
                Marker={MapView.Marker}
                post={post}
                navigate={navigate}
              />
            ))}
          </MapView>
        </>
      )}
      <Icon
        raised
        reverse
        name="plus"
        type="material-community"
        color={colors.primary}
        reverseColor={colors.surface}
        containerStyle={styles.icon_button}
        onPress={handleRedirectToCamera}
      />
      <StatusBar hidden={false} style="dark" />
    </View>
  );
};
