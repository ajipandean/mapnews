import React from 'react';
import { Header, Text } from 'react-native-elements';

import styles from './styles';

export default function HeaderBar({ title, leftComponent, rightComponent }) {
  const s = styles();
  return (
    <Header
      backgroundColor="white"
      containerStyle={s.container}
      leftComponent={leftComponent}
      rightComponent={rightComponent}
      centerComponent={() => <Text h4>{title}</Text>}
    />
  );
}
