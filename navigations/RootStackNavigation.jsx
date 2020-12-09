import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import rootStackRegister from '../registers/rootStackRegister';

const RootStack = createStackNavigator();

export default function RootStackNavigation() {
  return (
    <RootStack.Navigator screenOptions={{ headerShown: false }}>
      {rootStackRegister.map((s) => (
        <RootStack.Screen
          key={s.name}
          name={s.name}
          component={s.component}
          options={s.options}
        />
      ))}
    </RootStack.Navigator>
  );
}
