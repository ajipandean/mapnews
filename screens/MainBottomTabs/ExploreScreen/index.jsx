import React from 'react';
import { View } from 'react-native';
import { Text } from 'react-native-elements';

import exploreScreenStyles from './styles';

export default () => {
  const styles = exploreScreenStyles();

  return (
    <View style={styles.container}>
      <Text>Explore screen</Text>
    </View>
  );
};
