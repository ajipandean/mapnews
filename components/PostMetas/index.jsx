import React, { useState, useEffect } from 'react';
import { ListItem, Avatar, Icon } from 'react-native-elements';

import firebase from '../../firebase.config';
import useTheme from '../../hooks/useTheme';

export default () => {
  const { colors } = useTheme();
  const [user, setUser] = useState({});

  const metas = [
    {
      icon: 'calendar',
      title: 'Selasa, 23 April 2020',
    },
    {
      icon: 'crosshairs-gps',
      title: 'Location will be set to your current location',
    },
  ];

  useEffect(() => {
    const unsubscribe = firebase.auth().onAuthStateChanged((u) => {
      setUser(u);
    });
    return () => unsubscribe();
  }, []);

  return (
    <>
      {metas.map((meta, i) => (
        <ListItem key={`meta-${i}`} topDivider>
          <Icon
            name={meta.icon}
            type="material-community"
            color={colors.placeholder}
          />
          <ListItem.Content>
            <ListItem.Title style={{ color: colors.placeholder }}>
              {meta.title}
            </ListItem.Title>
          </ListItem.Content>
        </ListItem>
      ))}
      {user ? (
        <ListItem topDivider>
          <Avatar rounded size={24} source={{ uri: user.photoURL }} />
          <ListItem.Content>
            <ListItem.Title style={{ color: colors.placeholder }}>
              {user.displayName}
            </ListItem.Title>
          </ListItem.Content>
        </ListItem>
      ) : null}
    </>
  );
};
