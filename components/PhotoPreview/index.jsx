import React from 'react';
import { View, useWindowDimensions, ActivityIndicator } from 'react-native';
import { Image, Text } from 'react-native-elements';

import photoPreviewStyles from './styles';
import useTheme from '../../hooks/useTheme';

export default ({ result, progress }) => {
  const { width } = useWindowDimensions();
  const { colors } = useTheme();

  const styles = photoPreviewStyles(width);

  return (
    <View style={styles.container}>
      <Image source={{ uri: result.uri }} style={styles.image} />
      {progress > 0 || progress === 100 ? (
        <View style={styles.loading}>
          {progress === 100 ? (
            <Text>Done uploading.</Text>
          ) : (
            <>
              <ActivityIndicator
                style={styles.indicator}
                color={colors.primary}
                size={40}
              />
              <Text>
                Uploading...
                {Math.ceil(progress)}
                %
              </Text>
            </>
          )}
        </View>
      ) : null}
    </View>
  );
};
