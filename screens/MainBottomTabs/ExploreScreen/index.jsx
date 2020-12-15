import React from 'react';
import MapView from 'react-native-maps';
import { View } from 'react-native';
import { Text } from 'react-native-elements';

import exploreScreenStyles from './styles';

export default () => {
  const styles = exploreScreenStyles();

  return (
    <View style={styles.container}>
      <MapView style={styles.map} />
    </View>
  );
};
