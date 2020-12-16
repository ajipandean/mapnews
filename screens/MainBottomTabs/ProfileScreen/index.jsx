import React, { useEffect, useState, useContext } from 'react';
import { useNavigation } from '@react-navigation/native';
import { ScrollView, View } from 'react-native';
import { Text, Header } from 'react-native-elements';

import profileScreenStyles from './styles';
import firebase from '../../../firebase.config';
import useTheme from '../../../hooks/useTheme';
import toast from '../../../helpers/toast';
import AuthContext from '../../../contexts/authContext';
import AccountOverview from '../../../components/AccountOverview';

export default () => {
  const { colors } = useTheme();
  const { navigate } = useNavigation();
  const { logout } = useContext(AuthContext);
  const [user, setUser] = useState({});

  const styles = profileScreenStyles();

  useEffect(() => {
    const unsubscribe = firebase.auth().onAuthStateChanged((u) => {
      setUser(u);
    });
    return () => unsubscribe();
  }, []);

  const handleLogout = async () => {
    try {
      await logout();
    } catch (err) {
      toast(err.message);
    }
  };

  return (
    <View style={styles.container}>
      <Header
        containerStyle={styles.header}
        backgroundColor={colors.surface}
        centerComponent={() => <Text h4>Profil</Text>}
        rightComponent={{
          icon: 'exit-to-app',
          type: 'material-community',
          onPress: handleLogout,
        }}
      />
      <ScrollView style={styles.padded_horizontal}>
        <AccountOverview user={user} navigate={navigate} />
      </ScrollView>
    </View>
  );
};
