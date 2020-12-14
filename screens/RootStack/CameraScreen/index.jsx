import React, { useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Camera } from 'expo-camera';
import { useNavigation } from '@react-navigation/native';
import { View } from 'react-native';
import { Button } from 'react-native-elements';

import styles from './styles';
import consts from './consts';
import useTheme from '../../../hooks/useTheme';
import ImagesSlider from '../../../components/ImagesSlider';
import CameraActions from '../../../components/CameraActions';
import GoBackWithMessage from '../../../components/GoBackWithMessage';

export default function CameraScreen() {
  const { goBack } = useNavigation();
  const [hasPermission, setHasPermission] = useState(true);
  const [type, setType] = useState(consts.TYPE_BACK);
  const [flash, setFlash] = useState(consts.FLASH_OFF);
  const [autofocus] = useState(consts.AUTOFOCUS_ON);
  const { colors } = useTheme();
  const s = styles();

  async function checkCameraPermission() {
    const { granted } = await Camera.getPermissionsAsync();
    if (granted) setHasPermission(granted);
  }

  useEffect(() => {
    checkCameraPermission();
  }, []);

  if (!hasPermission) {
    return <GoBackWithMessage message="No access to camera" goBack={goBack} />;
  }
  return (
    <View style={s.container}>
      <Camera
        ratio="16:9"
        pictureSize="1:1"
        style={s.camera}
        type={type}
        flashMode={flash}
        autoFocus={autofocus}
      >
        <View style={s.top_container}>
          <Button
            loading={false}
            iconRight
            icon={{
              name: 'arrow-right',
              size: 20,
              type: 'material-community',
              color: colors.surface,
            }}
            titleStyle={{ color: colors.surface }}
            type="clear"
            title="Next"
          />
        </View>
        <View style={s.bottom_container}>
          <ImagesSlider />
          <CameraActions
            flashIcon={flash === consts.FLASH_OFF ? 'flash-off' : 'flash'}
            toggleCameraType={() => setType(
              type === consts.TYPE_BACK ? consts.TYPE_FRONT : consts.TYPE_BACK,
            )}
            toggleFlashMode={() => setFlash(
              flash === consts.FLASH_OFF ? consts.FLASH_ON : consts.FLASH_OFF,
            )}
          />
        </View>
      </Camera>
      <StatusBar hidden />
    </View>
  );
}
