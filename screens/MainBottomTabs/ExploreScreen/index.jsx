import React from 'react';
import MapView from 'react-native-maps';
import { Camera } from 'expo-camera';
import { useNavigation } from '@react-navigation/native';
import { View, FlatList } from 'react-native';

import styles from './styles';
import consts from './consts';
import useToastError from '../../../hooks/useToastError';
import HeaderBar from '../../../components/HeaderBar';
import PostCardHorizontal from '../../../components/PostCardHorizontal';

export default function ExploreScreen() {
  const { navigate } = useNavigation();
  const s = styles();

  async function handleCamera() {
    try {
      const { granted } = await Camera.requestPermissionsAsync();
      if (granted) navigate('camera');
      if (!granted) throw new Error('No access to camera');
    } catch (err) {
      useToastError(err);
    }
  }

  return (
    <View style={s.container}>
      <HeaderBar
        title="Explore"
        leftComponent={{
          icon: 'magnify',
          type: 'material-community',
          onPress: () => {},
        }}
        rightComponent={{
          icon: 'plus-box-outline',
          type: 'material-community',
          onPress: handleCamera,
        }}
      />
      <MapView style={s.map}>
        <MapView.Marker
          coordinate={{
            latitude: -8.65,
            longitude: 115.216667,
          }}
        />
      </MapView>
      <FlatList
        horizontal
        style={s.slider}
        data={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]}
        keyExtractor={(item, index) => `${item}-${index}`}
        contentContainerStyle={{
          paddingHorizontal: consts.POST_CARD_INSET - 4,
          paddingVertical: 16,
        }}
        scrollEventThrottle={1}
        showsHorizontalScrollIndicator={false}
        renderItem={() => <PostCardHorizontal width={consts.POST_CARD_WIDTH} />}
        pagingEnabled
        decelerationRate={0.88}
        snapToInterval={consts.POST_CARD_WIDTH + 16}
        snapToAlignment="start"
      />
    </View>
  );
}
