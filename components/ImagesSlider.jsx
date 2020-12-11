import React from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import { Image } from 'react-native-elements';

export default function ImagesSlider() {
  const styles = StyleSheet.create({
    container: { flex: 1 },
    separator: { marginHorizontal: 4 },
    image: {
      width: 70,
      height: 70,
      resizeMode: 'cover',
    },
  });
  return (
    <View style={styles.container}>
      <FlatList
        horizontal
        keyExtractor={(item, index) => `${item}-${index}`}
        data={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]}
        scrollEventThrottle={1}
        showsHorizontalScrollIndicator={false}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
        renderItem={() => (
          <Image
            style={styles.image}
            source={{
              uri: 'https://www.btklsby.go.id/images/placeholder/basic.png',
            }}
          />
        )}
      />
    </View>
  );
}
