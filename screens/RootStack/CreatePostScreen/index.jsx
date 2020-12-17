import React, { useState, useLayoutEffect } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import { ScrollView, View } from 'react-native';
import { Text, Button } from 'react-native-elements';

import createPostScreenStyles from './styles';
import CreatePostFormInput from '../../../components/CreatePostFormInput';
import PhotoPreview from '../../../components/PhotoPreview';

export default () => {
  const navigation = useNavigation();
  const { params } = useRoute();
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
        <PhotoPreview result={params.result} />
        <Text>Create post screen</Text>
      </ScrollView>
    </View>
  );
};
