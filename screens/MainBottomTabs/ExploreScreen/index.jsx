import React from 'react';
import MapView from 'react-native-maps';
import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';
import { Icon } from 'react-native-elements';

import exploreScreenStyles from './styles';
import useTheme from '../../../hooks/useTheme';

export default () => {
  const { colors } = useTheme();

  const styles = exploreScreenStyles();

  return (
    <View style={styles.container}>
      <MapView style={styles.map} />
      <Icon
        raised
        reverse
        name="plus"
        type="material-community"
        color={colors.primary}
        reverseColor={colors.surface}
        containerStyle={styles.icon_button}
        onPress={() => console.log('Add button hitted')}
      />
      <StatusBar hidden={false} style="dark" />
    </View>
  );
};
