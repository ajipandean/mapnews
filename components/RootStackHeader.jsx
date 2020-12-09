import React from 'react';
import { StyleSheet } from 'react-native';
import { Header, Text } from 'react-native-elements';

export default function RootStackHeader() {
  const styles = StyleSheet.create({
    container: {
      elevation: 4,
    },
  });
  return (
    <Header
      backgroundColor="white"
      containerStyle={styles.container}
      leftComponent={{
        icon: 'magnify',
        type: 'material-community',
        onPress: () => {},
      }}
      rightComponent={{
        icon: 'bell-outline',
        type: 'material-community',
        onPress: () => {},
      }}
      centerComponent={() => <Text h4>Mapnews</Text>}
    />
  );
}
