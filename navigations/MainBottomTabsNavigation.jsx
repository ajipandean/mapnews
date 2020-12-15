import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import mainBottomTabsRegister from '../registers/mainBottomTabsRegister';

const { Navigator, Screen } = createBottomTabNavigator();

export default () => (
  <Navigator>
    {mainBottomTabsRegister.map((screen) => (
      <Screen
        key={screen.name}
        name={screen.name}
        component={screen.component}
        options={screen.options}
      />
    ))}
  </Navigator>
);
