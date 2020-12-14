import React from 'react';
import { View } from 'react-native';
import { Text, Button } from 'react-native-elements';

import styles from './styles';

export default function GoBackWithMessage({ message, goBack }) {
  const s = styles();

  return (
    <View style={s.container}>
      <Text h4 h4Style={s.message}>
        {message}
      </Text>
      <Button type="clear" title="Go back" onPress={() => goBack()} />
    </View>
  );
}
