import React from 'react';
import { View, useWindowDimensions } from 'react-native';
import { Image } from 'react-native-elements';

import photoPreviewStyles from './styles';

export default ({ result }) => {
  const { width } = useWindowDimensions();

  const styles = photoPreviewStyles(width);

  return (
    <View style={styles.container}>
      <Image source={{ uri: result.uri }} style={styles.image} />
    </View>
  );
};
