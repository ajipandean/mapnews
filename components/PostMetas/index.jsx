import React from 'react';
import { ListItem, Avatar, Icon } from 'react-native-elements';

import useTheme from '../../hooks/useTheme';

export default ({ date, user }) => {
  const { colors } = useTheme();

  const metas = [
    {
      icon: 'crosshairs-gps',
      title: 'Lokasi Anda saat ini',
    },
    {
      icon: 'calendar',
      title: date,
    },
  ];

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
