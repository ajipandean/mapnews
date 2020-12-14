import React, { useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Camera } from 'expo-camera';
import { useNavigation } from '@react-navigation/native';
import { View, StyleSheet } from 'react-native';

import ImagesSlider from '../../components/ImagesSlider';
import CameraActions from '../../components/CameraActions';
import GoBackWithMessage from '../../components/GoBackWithMessage';

const TYPE_BACK = Camera.Constants.Type.back;
const TYPE_FRONT = Camera.Constants.Type.front;
const FLASH_ON = Camera.Constants.FlashMode.on;
const FLASH_OFF = Camera.Constants.FlashMode.off;
const AUTOFOCUS_ON = Camera.Constants.AutoFocus.on;

export default function CameraScreen() {
  const { goBack } = useNavigation();
  const [hasPermission, setHasPermission] = useState(true);
  const [type, setType] = useState(TYPE_BACK);
  const [flash, setFlash] = useState(FLASH_OFF);
  const [autofocus] = useState(AUTOFOCUS_ON);

  const styles = StyleSheet.create({
    container: { flex: 1 },
    camera: { flex: 1 },
    bottom_container: {
      position: 'absolute',
      left: 0,
      right: 0,
      bottom: 0,
    },
  });

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
    <View style={styles.container}>
      <Camera
        ratio="16:9"
        pictureSize="1:1"
        style={styles.camera}
        type={type}
        flashMode={flash}
        autoFocus={autofocus}
      >
        <View style={styles.bottom_container}>
          <ImagesSlider />
          <CameraActions
            flashIcon={flash === FLASH_OFF ? 'flash-off' : 'flash'}
            toggleCameraType={() => setType(type === TYPE_BACK ? TYPE_FRONT : TYPE_BACK)}
            toggleFlashMode={() => setFlash(flash === FLASH_OFF ? FLASH_ON : FLASH_OFF)}
          />
        </View>
      </Camera>
      <StatusBar hidden />
    </View>
  );
}
