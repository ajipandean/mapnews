import React from 'react';
import { View, FlatList } from 'react-native';
import { Image } from 'react-native-elements';

import styles from './styles';

export default function ImagesSlider({ photos }) {
  const s = styles();
  return (
    <View style={s.container}>
      <FlatList
        horizontal
        data={photos}
        keyExtractor={(item, index) => `${item}-${index}`}
        scrollEventThrottle={1}
        showsHorizontalScrollIndicator={false}
        ItemSeparatorComponent={() => <View style={s.separator} />}
        renderItem={({ item }) => (
          <Image
            style={s.image}
            source={{
              uri:
                item.uri
                || 'https://www.btklsby.go.id/images/placeholder/basic.png',
            }}
          />
        )}
      />
    </View>
  );
}
