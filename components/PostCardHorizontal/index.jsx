import React from 'react';
import { View, Pressable } from 'react-native';
import { Text, Image } from 'react-native-elements';

import styles from './styles';
import useTheme from '../../hooks/useTheme';

export default function PostCardHorizontal({ width }) {
  const { colors } = useTheme();
  const s = styles(width);

  return (
    <Pressable
      style={s.container}
      android_ripple={{ color: colors.placeholder }}
    >
      <Image
        style={s.photo}
        source={{
          uri:
            'https://c.files.bbci.co.uk/1AD9/production/_100837860_teslacrash.jpg',
        }}
      />
      <View style={s.post}>
        <Text numberOfLines={3} style={s.title}>
          Tabrakan Parah! Mobil vs Truk Lorem ipsum dolor sit amet, consectetur
          adipisicing elit. Id repellendus distinctio eligendi, quidem non et
          modi nostrum, veritatis, saepe quibusdam harum doloremque ex aliquid
          sapiente autem explicabo, mollitia vero. Officia?
        </Text>
        <Text style={s.author}>Pandean Mertayasa</Text>
        <Text style={s.timestamps}>Tue, 23 Apr 2020 at 13:00</Text>
      </View>
    </Pressable>
  );
}
