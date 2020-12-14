import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements';

import styles from './styles';
import useTheme from '../../hooks/useTheme';

export default function CameraActions({
  flashIcon,
  toggleFlashMode,
  toggleCameraType,
}) {
  const { colors } = useTheme();
  const s = styles();

  return (
    <View style={s.actions}>
      <TouchableOpacity onPress={toggleFlashMode}>
        <Icon
          name={flashIcon}
          type="material-community"
          color={colors.surface}
          size={32}
        />
      </TouchableOpacity>
      <TouchableOpacity style={s.capture}>
        <View style={s.inner_capture} />
      </TouchableOpacity>
      <TouchableOpacity onPress={toggleCameraType}>
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
