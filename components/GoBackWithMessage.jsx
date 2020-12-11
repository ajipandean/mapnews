import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Text, Button } from 'react-native-elements';

export default function GoBackWithMessage({ message, goBack }) {
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    message: { marginBottom: 8 },
  });

  return (
    <View style={styles.container}>
      <Text h4 h4Style={styles.message}>
        {message}
      </Text>
      <Button type="clear" title="Go back" onPress={() => goBack()} />
    </View>
  );
}
