import React, { useState, useLayoutEffect } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import { ScrollView, View } from 'react-native';
import { Button } from 'react-native-elements';

import createUpdateScreenStyles from './styles';
import toast from '../../../helpers/toast';
import firebase from '../../../firebase.config';
import CreatePostFormInput from '../../../components/CreatePostFormInput';
import PhotoPreview from '../../../components/PhotoPreview';
import PostMetas from '../../../components/PostMetas';

export default () => {
  const navigation = useNavigation();
  const { params } = useRoute();
  const [title, setTitle] = useState(params.post.title);
  const [desc, setDesc] = useState(params.post.description);
  const [user] = useState(params.post.user);
  const [date] = useState(params.post.uploaded_at);
  const [loading, setLoading] = useState(false);

  const styles = createUpdateScreenStyles();

  const handleSavePost = async () => {
    setLoading(true);
    try {
      const db = firebase.firestore();
      await db
        .collection('posts')
        .doc(params.post.id)
        .update({
          title,
          description: desc,
        });
      toast('Document updated');
      navigation.navigate('main-bottom-tabs', { screen: 'explore' });
    } catch (err) {
      toast(err.message);
    }
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Button loading={loading} type="clear" title="Simpan" onPress={handleSavePost} />
      ),
      headerRightContainerStyle: { marginRight: 8 },
    });
  }, [navigation, title, desc, user, loading]);

  return (
    <View style={styles.container}>
      <ScrollView>
        <CreatePostFormInput title={title} desc={desc} setTitle={setTitle} setDesc={setDesc} />
        <PostMetas date={date} user={user} />
        <PhotoPreview result={{ uri: params.post.photo }} />
      </ScrollView>
    </View>
  );
};
