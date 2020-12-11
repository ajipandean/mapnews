import React from 'react';
import { StyleSheet } from 'react-native';
import { Header, Text } from 'react-native-elements';

export default function HeaderBar({ title, leftComponent, rightComponent }) {
  const styles = StyleSheet.create({
    container: {
      elevation: 4,
    },
  });
  return (
    <Header
      backgroundColor="white"
      containerStyle={styles.container}
      leftComponent={leftComponent}
      rightComponent={rightComponent}
      centerComponent={() => <Text h4>{title}</Text>}
    />
  );
}
