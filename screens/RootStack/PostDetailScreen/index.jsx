import React, { useLayoutEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { ScrollView, View, useWindowDimensions } from 'react-native';
import {
  Text, Image, ListItem, Icon, Avatar, Button,
} from 'react-native-elements';

import postDetailScreenStyles from './styles';
import useTheme from '../../../hooks/useTheme';

const PostDetailScreen = () => {
  const { colors } = useTheme();
  const navigation = useNavigation();
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
          source={{
            uri:
              'https://image.shutterstock.com/image-vector/news-background-breaking-newsvector-infographic-260nw-516722350.jpg',
          }}
        />
      </View>
      <View style={styles.content_wrapper}>
        <Text style={styles.content_title}>The King Of Arthurs</Text>
        <Text style={styles.content_desc}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam consectetur recusandae
          quod sunt a vel unde asperiores maxime iusto consequuntur accusamus nemo illum minus in,
          laborum quas obcaecati laudantium. Neque accusamus placeat est eos laudantium sit amet,
          cumque! Magni sit ipsam est harum enim maiores numquam officiis obcaecati iure at fuga,
          quo, repudiandae quia facilis, laudantium aut vero facere quis! Fugiat ea incidunt
          consequatur vitae aperiam magni vel. Consequuntur, quasi. Quidem soluta, aperiam
          perspiciatis molestias? At, debitis placeat amet obcaecati veritatis aperiam iste nesciunt
          beatae consequatur delectus eius aspernatur ducimus recusandae possimus molestias corrupti
          incidunt suscipit deleniti, maxime ut eos.
        </Text>
      </View>
      <ListItem topDivider>
        <Icon name="calendar" type="material-community" color={colors.placeholder} />
        <ListItem.Content>
          <ListItem.Title>Senin, 23 April 2020</ListItem.Title>
        </ListItem.Content>
      </ListItem>
      <ListItem topDivider>
        <Avatar
          rounded
          size={24}
          source={{ uri: 'https://cdn1.iconfinder.com/data/icons/avatars-1-5/136/87-512.png' }}
        />
        <ListItem.Content>
          <ListItem.Title style={{ color: colors.placeholder }}>
            Muhamad Aji Pandean Mertayasa
          </ListItem.Title>
        </ListItem.Content>
      </ListItem>
    </ScrollView>
  );
};

export default PostDetailScreen;
