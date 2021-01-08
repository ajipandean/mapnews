import React, { useState, useLayoutEffect } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import {
  ScrollView, View, useWindowDimensions, ActivityIndicator,
} from 'react-native';
import {
  Text, Image, ListItem, Icon, Avatar, Button,
} from 'react-native-elements';

import firebase from '../../../firebase.config';
import postDetailScreenStyles from './styles';
import useTheme from '../../../hooks/useTheme';
import toast from '../../../helpers/toast';

const PostDetailScreen = () => {
  const { colors } = useTheme();
  const navigation = useNavigation();
  const { params } = useRoute();
  const { width } = useWindowDimensions();
  const [deleteLoading, setDeleteLoading] = useState(false);

  const styles = postDetailScreenStyles(width);

  const handleDeletePost = async () => {
    setDeleteLoading(true);
    try {
      const db = firebase.firestore();
      await db
        .collection('posts')
        .doc(params.post.id)
        .delete();
      toast('Post deleted successfully');
      navigation.navigate('explore');
    } catch (err) {
      toast(err.message);
    } finally {
      setDeleteLoading(false);
    }
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <View style={{ flexDirection: 'row' }}>
          <Button
            title="Ubah"
            type="clear"
            onPress={() => navigation.navigate('update-post', { post: params.post })}
          />
          <Button title="Hapus" type="clear" loading={deleteLoading} onPress={handleDeletePost} />
        </View>
      ),
      headerRightContainerStyle: { marginRight: 8 },
    });
  }, [navigation, deleteLoading]);

  return (
    <ScrollView style={styles.container}>
      <View style={styles.image_container}>
        <Image
          style={styles.image}
          placeholderStyle={{ backgroundColor: '#fff' }}
          renderPlaceholderContent={<ActivityIndicator color="blue" size={24} />}
          source={{
            uri: params.post.photo,
          }}
        />
      </View>
      <View style={styles.content_wrapper}>
        <Text style={styles.content_title}>{params.post.title}</Text>
        {params.post.description ? (
          <Text style={styles.content_desc}>{params.post.description}</Text>
        ) : null}
      </View>
      <ListItem topDivider>
        <Icon name="calendar" type="material-community" color={colors.placeholder} />
        <ListItem.Content>
          <ListItem.Title>{params.post.uploaded_at}</ListItem.Title>
        </ListItem.Content>
      </ListItem>
      <ListItem topDivider>
        <Avatar rounded size={24} source={{ uri: params.post.user.photoURL }} />
        <ListItem.Content>
          <ListItem.Title style={{ color: colors.placeholder }}>
            {params.post.user.displayName}
          </ListItem.Title>
        </ListItem.Content>
      </ListItem>
    </ScrollView>
  );
};

export default PostDetailScreen;
