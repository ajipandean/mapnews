import React from 'react';
import { View, useWindowDimensions } from 'react-native';
import { Text, Image } from 'react-native-elements';

import postDetailScreenStyles from './styles';

const PostDetailScreen = () => {
  const { width } = useWindowDimensions();
  const styles = postDetailScreenStyles(width);

  return (
    <View style={styles.container}>
      <View style={styles.image_container}>
        <Image
          style={styles.image}
          source={{
            uri:
              'https://image.shutterstock.com/image-vector/news-background-breaking-newsvector-infographic-260nw-516722350.jpg',
          }}
        />
      </View>
    </View>
  );
};

export default PostDetailScreen;
