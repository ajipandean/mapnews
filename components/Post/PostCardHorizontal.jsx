import React from 'react';
import { View, StyleSheet, Pressable } from 'react-native';
import { Text, Image } from 'react-native-elements';

import useTheme from '../../hooks/useTheme';

export default function PostCardHorizontal({ width }) {
  const { colors } = useTheme();
  const styles = StyleSheet.create({
    container: {
      width,
      backgroundColor: colors.surface,
      borderRadius: 4,
      overflow: 'hidden',
      marginHorizontal: 8,
      flexDirection: 'row',
      elevation: 2,
    },
    photo: {
      width: 120,
      height: 120,
      resizeMode: 'cover',
    },
    post: {
      flex: 1,
      padding: 12,
    },
    title: {
      fontSize: 16,
      marginBottom: 8,
      fontWeight: 'bold',
    },
    author: {
      fontSize: 12,
      color: colors.placeholder,
    },
    timestamps: {
      fontSize: 12,
      color: colors.placeholder,
    },
  });
  return (
    <Pressable
      style={styles.container}
      android_ripple={{ color: colors.placeholder }}
    >
      <Image
        style={styles.photo}
        source={{
          uri:
            'https://c.files.bbci.co.uk/1AD9/production/_100837860_teslacrash.jpg',
        }}
      />
      <View style={styles.post}>
        <Text numberOfLines={3} style={styles.title}>
          Tabrakan Parah! Mobil vs Truk Lorem ipsum dolor sit amet, consectetur
          adipisicing elit. Id repellendus distinctio eligendi, quidem non et
          modi nostrum, veritatis, saepe quibusdam harum doloremque ex aliquid
          sapiente autem explicabo, mollitia vero. Officia?
        </Text>
        <Text style={styles.author}>Pandean Mertayasa</Text>
        <Text style={styles.timestamps}>Tue, 23 Apr 2020 at 13:00</Text>
      </View>
    </Pressable>
  );
}
