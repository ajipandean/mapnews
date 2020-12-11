import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements';

import useTheme from '../../hooks/useTheme';

export default function CameraActions() {
  const { colors } = useTheme();
  const styles = StyleSheet.create({
    actions: {
      position: 'absolute',
      left: 0,
      right: 0,
      bottom: 0,
      flexDirection: 'row',
      paddingVertical: 24,
      alignItems: 'center',
      justifyContent: 'center',
    },
    capture: {
      padding: 8,
      marginHorizontal: 52,
      borderRadius: 100,
      backgroundColor: 'rgba(255, 255, 255, 0.4)',
    },
    inner_capture: {
      width: 65,
      height: 65,
      borderRadius: 100,
      backgroundColor: colors.surface,
    },
  });
  return (
    <View style={styles.actions}>
      <TouchableOpacity>
        <Icon
          name="flash"
          type="material-community"
          color={colors.surface}
          size={32}
        />
      </TouchableOpacity>
      <TouchableOpacity style={styles.capture}>
        <View style={styles.inner_capture} />
      </TouchableOpacity>
      <TouchableOpacity>
        <Icon
          name="camera-party-mode"
          type="material-community"
          color={colors.surface}
          size={32}
        />
      </TouchableOpacity>
    </View>
  );
}
