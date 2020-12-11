import React from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Image, Icon } from 'react-native-elements';

import useTheme from '../hooks/useTheme';

export default function ImagesSlider() {
  const { colors } = useTheme();
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      position: 'relative',
    },
    separator: { marginHorizontal: 4 },
    image: {
      width: 70,
      height: 70,
      resizeMode: 'cover',
    },
    fab: {
      position: 'absolute',
      top: 0,
      right: 0,
      bottom: 0,
      width: 70,
      zIndex: 1,
      justifyContent: 'center',
    },
    inner_fab: {
      width: '100%',
      padding: 4,
      elevation: 4,
      zIndex: 1,
      alignItems: 'flex-start',
      borderTopLeftRadius: 100,
      borderBottomLeftRadius: 100,
      backgroundColor: colors.surface,
    },
    icon_container: {
      padding: 4,
      borderRadius: 100,
      backgroundColor: colors.primary,
    },
  });
  return (
    <View style={styles.container}>
      <FlatList
        horizontal
        keyExtractor={(item, index) => `${item}-${index}`}
        data={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]}
        contentContainerStyle={{
          paddingRight: 70 + 8,
        }}
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
      <View style={styles.fab}>
        <TouchableOpacity
          style={styles.inner_fab}
          onPress={() => console.log('Gesture handler')}
        >
          <Icon
            name="arrow-right"
            type="material-community"
            color={colors.surface}
            containerStyle={styles.icon_container}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}
