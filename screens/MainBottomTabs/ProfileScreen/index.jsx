import React from 'react';
import { ScrollView, View } from 'react-native';
import { Text, Header } from 'react-native-elements';

import profileScreenStyles from './styles';
import useTheme from '../../../hooks/useTheme';
import AccountOverview from '../../../components/AccountOverview';

export default () => {
  const { colors } = useTheme();

  const styles = profileScreenStyles();

  return (
    <View style={styles.container}>
      <Header
        containerStyle={styles.header}
        backgroundColor={colors.surface}
        centerComponent={() => <Text h4>Profil</Text>}
      />
      <ScrollView style={styles.padded_horizontal}>
        <AccountOverview />
      </ScrollView>
    </View>
  );
};
