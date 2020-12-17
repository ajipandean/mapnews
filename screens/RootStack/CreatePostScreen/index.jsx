import React, { useState, useEffect, useLayoutEffect } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import { ScrollView, View } from 'react-native';
import { Button } from 'react-native-elements';
import Moment from 'moment';

import createPostScreenStyles from './styles';
import toast from '../../../helpers/toast';
import firebase from '../../../firebase.config';
import CreatePostFormInput from '../../../components/CreatePostFormInput';
import PhotoPreview from '../../../components/PhotoPreview';
import PostMetas from '../../../components/PostMetas';

export default () => {
  const navigation = useNavigation();
  const { params } = useRoute();
  const [date] = useState(Moment(Date.now()).format('LLLL'));
  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(false);
  const [progress, setProgress] = useState(0);

  const styles = createPostScreenStyles();

  const handleSavePost = async () => {
    setLoading(true);
    try {
      const response = await fetch(params.result.uri);
      const blob = await response.blob();
      const ref = firebase
        .storage()
        .ref('posts')
        .child(`POST_${Date.now()}.jpg`);
      const uploadTask = ref.put(blob, { contentType: 'image/jpeg' });
      uploadTask.on(
        'state_changed',
        (snapshot) => {
          setProgress((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
        },
        (err) => {
          throw new Error(err);
        },
        async () => {
          const downloadURL = await uploadTask.snapshot.ref.getDownloadURL();
          try {
            const db = firebase.firestore();
            await db.collection('posts').add({
              title,
              description: desc,
              uploaded_at: date,
              location: {
                lat: 0,
                lon: 0,
              },
              user,
              photo: downloadURL,
            });
          } catch (err) {
            toast(err.message);
          }
          navigation.navigate('main-bottom-tabs', { screen: 'explore' });
        },
      );
    } catch (err) {
      toast(err.message);
    }
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Button
          loading={loading}
          type="clear"
          title="Simpan"
          onPress={handleSavePost}
        />
      ),
      headerRightContainerStyle: { marginRight: 8 },
    });
  }, [navigation, title, desc, user, loading]);

  useEffect(() => {
    const unsubscribe = firebase
      .auth()
      .onAuthStateChanged(({ displayName, photoURL }) => {
        setUser({ displayName, photoURL });
      });
    return () => unsubscribe();
  }, []);

  return (
    <View style={styles.container}>
      <ScrollView>
        <CreatePostFormInput
          title={title}
          desc={desc}
          setTitle={setTitle}
          setDesc={setDesc}
        />
        <PostMetas date={date} user={user} />
        <PhotoPreview result={params.result} progress={progress} />
      </ScrollView>
    </View>
  );
};
