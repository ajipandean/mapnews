import React, { useState, useEffect, useLayoutEffect } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import { ScrollView, View } from 'react-native';
import { Button } from 'react-native-elements';
import Moment from 'moment';

import createPostScreenStyles from './styles';
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

  const styles = createPostScreenStyles();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => <Button type="clear" title="Simpan" />,
      headerRightContainerStyle: { marginRight: 8 },
    });
  }, [navigation]);

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
        <PhotoPreview result={params.result} />
      </ScrollView>
    </View>
  );
};
