import React from 'react';
import {
  createStackNavigator,
  CardStyleInterpolators,
} from '@react-navigation/stack';

import authStackRegister from '../registers/authStackRegister';
import rootStackRegister from '../registers/rootStackRegister';

const { Navigator, Screen } = createStackNavigator();

export default () => (
  <Navigator
    screenOptions={{
      headerShown: false,
      cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
    }}
  >
    {false ? (
      <>
        {authStackRegister.map((screen) => (
          <Screen
            key={screen.name}
            name={screen.name}
            component={screen.component}
            options={screen.options}
          />
        ))}
      </>
    ) : (
      <>
        {rootStackRegister.map((screen) => (
          <Screen
            key={screen.name}
            name={screen.name}
            component={screen.component}
            options={screen.options}
          />
        ))}
      </>
    )}
  </Navigator>
);
