import React from 'react';
import { View, TextInput } from 'react-native';

import createPostFormInputStyles from './styles';

export default ({
  title, desc, setTitle, setDesc,
}) => {
  const styles = createPostFormInputStyles();

  return (
    <View style={styles.container}>
      <TextInput
        multiline
        value={title}
        onChangeText={(v) => setTitle(v)}
        style={styles.post_title}
        placeholder="Judul postingan..."
      />
      <TextInput
        multiline
        value={desc}
        onChangeText={(v) => setDesc(v)}
        style={styles.post_description}
        placeholder="Deskripsi postingan..."
      />
    </View>
  );
};
