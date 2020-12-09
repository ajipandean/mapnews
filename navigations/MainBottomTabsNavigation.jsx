import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import mainBottomTabsRegister from '../registers/mainBottomTabsRegister';

const MainBottomTabs = createBottomTabNavigator();

export default function MainBottomTabsNavigation() {
  return (
    <MainBottomTabs.Navigator>
      {mainBottomTabsRegister.map((s) => (
        <MainBottomTabs.Screen
          key={s.name}
          name={s.name}
          component={s.component}
          options={s.options}
        />
      ))}
    </MainBottomTabs.Navigator>
  );
}
