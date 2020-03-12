import * as React from 'react';

import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import Main from './pages/Main';
import User from './pages/User';

const Stack = createStackNavigator();

export default function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerStyle: {backgroundColor: '#7159c1'},
          headerTintColor: '#fff',
          headerBackTitleVisible: false,
        }}>
        <Stack.Screen name="Home" component={Main} />
        <Stack.Screen name="Notifications" component={User} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
