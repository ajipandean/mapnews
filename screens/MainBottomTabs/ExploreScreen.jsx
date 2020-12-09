import React from 'react';
import MapView from 'react-native-maps';
import { View, StyleSheet } from 'react-native';

import useTheme from '../../hooks/useTheme';
import HeaderBar from '../../components/HeaderBar';

export default function ExploreScreen() {
  const { colors } = useTheme();
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.surface,
    },
    map: {
      flex: 1,
    },
  });
  return (
    <View style={styles.container}>
      <HeaderBar title="Explore" />
      <MapView style={styles.map} />
    </View>
  );
}
