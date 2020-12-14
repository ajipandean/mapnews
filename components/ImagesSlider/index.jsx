import React from 'react';
import { View, FlatList } from 'react-native';
import { Image } from 'react-native-elements';

import styles from './styles';

export default function ImagesSlider() {
  const s = styles();
  return (
    <View style={s.container}>
      <FlatList
        horizontal
        keyExtractor={(item, index) => `${item}-${index}`}
        data={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]}
        scrollEventThrottle={1}
        showsHorizontalScrollIndicator={false}
        ItemSeparatorComponent={() => <View style={s.separator} />}
        renderItem={() => (
          <Image
            style={s.image}
            source={{
              uri: 'https://www.btklsby.go.id/images/placeholder/basic.png',
            }}
          />
        )}
      />
    </View>
  );
}
