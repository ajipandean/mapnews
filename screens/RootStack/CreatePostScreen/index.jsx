import React, { useLayoutEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { View } from 'react-native';
import { Text, Button } from 'react-native-elements';

export default () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => <Button type="clear" title="Simpan" />,
      headerRightContainerStyle: { marginRight: 4 },
    });
  }, [navigation]);

  return (
    <View>
      <Text>Create post screen</Text>
    </View>
  );
};
