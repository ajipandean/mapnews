import React, { useState, useLayoutEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { ScrollView, View } from 'react-native';
import { Text, Button } from 'react-native-elements';

import createPostScreenStyles from './styles';
import CreatePostFormInput from '../../../components/CreatePostFormInput';

export default () => {
  const navigation = useNavigation();
  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');

  const styles = createPostScreenStyles();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => <Button type="clear" title="Simpan" />,
      headerRightContainerStyle: { marginRight: 8 },
    });
  }, [navigation]);

  return (
    <View style={styles.container}>
      <ScrollView>
        <CreatePostFormInput
          title={title}
          desc={desc}
          setTitle={setTitle}
          setDesc={setDesc}
        />
        <Text>Create post screen</Text>
      </ScrollView>
    </View>
  );
};
