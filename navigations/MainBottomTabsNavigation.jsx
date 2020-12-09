import React from 'react';
import { Icon } from 'react-native-elements';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import useTheme from '../hooks/useTheme';
import mainBottomTabsRegister from '../registers/mainBottomTabsRegister';

const MainBottomTabs = createBottomTabNavigator();

export default function MainBottomTabsNavigation() {
  const { colors } = useTheme();
  return (
    <MainBottomTabs.Navigator
      tabBarOptions={{
        activeTintColor: colors.primary,
        inactiveTintColor: colors.placeholder,
        style: { height: 56 },
        labelStyle: { fontSize: 12 },
        tabStyle: { paddingVertical: 8 },
      }}
    >
      {mainBottomTabsRegister.map((s) => (
        <MainBottomTabs.Screen
          key={s.name}
          name={s.name}
          component={s.component}
          options={{
            ...s.options,
            tabBarIcon: ({ focused, color, size }) => (
              <Icon
                name={focused ? s.icon.active : s.icon.inactive}
                size={size}
                color={color}
                type="material-community"
              />
            ),
          }}
        />
      ))}
    </MainBottomTabs.Navigator>
  );
}
