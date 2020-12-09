import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import useTheme from '../../hooks/useTheme';
import HeaderBar from '../../components/HeaderBar';

export default function ExploreScreen() {
  const { colors } = useTheme();
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.surface,
    },
  });
  return (
    <View style={styles.container}>
      <HeaderBar title="Explore" />
      <Text>Explore screen</Text>
    </View>
  );
}
