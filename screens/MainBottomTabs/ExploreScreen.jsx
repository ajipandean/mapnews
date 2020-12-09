import React from 'react';
import MapView from 'react-native-maps';
import {
  View, FlatList, StyleSheet, Dimensions,
} from 'react-native';

import useTheme from '../../hooks/useTheme';
import HeaderBar from '../../components/HeaderBar';
import PostCardHorizontal from '../../components/Post/PostCardHorizontal';

const { width } = Dimensions.get('window');
const POST_CARD_WIDTH = width * 0.8;
const POST_CARD_INSET = width * 0.1 - 5;

export default function ExploreScreen() {
  const { colors } = useTheme();
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.surface,
    },
    map: { flex: 1 },
    slider: {
      position: 'absolute',
      left: 0,
      right: 0,
      bottom: 0,
    },
  });
  return (
    <View style={styles.container}>
      <HeaderBar title="Explore" />
      <MapView style={styles.map}>
        <MapView.Marker
          coordinate={{
            latitude: -8.65,
            longitude: 115.216667,
          }}
        />
      </MapView>
      <FlatList
        horizontal
        style={styles.slider}
        data={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]}
        keyExtractor={(item, index) => `${item}-${index}`}
        contentContainerStyle={{
          paddingHorizontal: POST_CARD_INSET - 4,
          paddingVertical: 16,
        }}
        scrollEventThrottle={1}
        showsHorizontalScrollIndicator={false}
        renderItem={() => <PostCardHorizontal width={POST_CARD_WIDTH} />}
        pagingEnabled
        decelerationRate={0.88}
        snapToInterval={POST_CARD_WIDTH + 16}
        snapToAlignment="start"
      />
    </View>
  );
}
