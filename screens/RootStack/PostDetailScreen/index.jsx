import React, { useLayoutEffect } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import {
  ScrollView, View, useWindowDimensions, ActivityIndicator,
} from 'react-native';
import {
  Text, Image, ListItem, Icon, Avatar, Button,
} from 'react-native-elements';

import postDetailScreenStyles from './styles';
import useTheme from '../../../hooks/useTheme';

const PostDetailScreen = () => {
  const { colors } = useTheme();
  const navigation = useNavigation();
  const { params } = useRoute();
  const { width } = useWindowDimensions();

  const styles = postDetailScreenStyles(width);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <View style={{ flexDirection: 'row' }}>
          <Button title="Ubah" type="clear" />
          <Button title="Hapus" type="clear" />
        </View>
      ),
      headerRightContainerStyle: { marginRight: 8 },
    });
  }, [navigation]);

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
