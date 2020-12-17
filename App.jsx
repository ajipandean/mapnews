import React from 'react';
import { LogBox } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import RootStackNavigation from './navigations/RootStackNavigation';

LogBox.ignoreLogs([
  'Setting a timer for a long period of time',
  'Non-serializable values were found in the navigation state',
  "Accessing the 'state' property of the 'route' object is not supported",
]);

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <RootStackNavigation />
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
