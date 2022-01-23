import React from 'react';
import { Icon } from 'react-native-elements';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import useTheme from '../hooks/useTheme';
import mainBottomTabsRegister from '../registers/mainBottomTabsRegister';

const { Navigator, Screen } = createBottomTabNavigator();

export default () => {
  const { colors } = useTheme();

  return (
    <Navigator
      shifting={false}
      tabBarOptions={{
        activeTintColor: colors.primary,
        inactiveTintColor: colors.placeholder,
        style: { height: 56 },
        tabStyle: { paddingVertical: 8 },
        labelStyle: { fontWeight: 'bold' },
      }}
    >
      {mainBottomTabsRegister.map((screen) => (
        <Screen
          key={screen.name}
          name={screen.name}
          component={screen.component}
          options={{
            ...screen.options,
            tabBarIcon: ({ focused, color, size }) => (
              <Icon
                size={size}
                color={color}
                type="material-community"
                name={focused ? screen.icon.active : screen.icon.inactive}
              />
            ),
          }}
        />
      ))}
    </Navigator>
  );
};
