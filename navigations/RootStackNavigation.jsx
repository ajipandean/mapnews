import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import authStackRegister from '../registers/authStackRegister';

const { Navigator, Screen } = createStackNavigator();

export default () => (
  <Navigator screenOptions={{ headerShown: false }}>
    {authStackRegister.map((screen) => (
      <Screen
        key={screen.name}
        name={screen.name}
        component={screen.component}
        options={screen.options}
      />
    ))}
  </Navigator>
);
