import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import MainScreen from './Main';
import DetailScreen from './Detail';
import NotiScreen from './Noti.js';

const Stack = createStackNavigator();
function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="MAIN">
        <Stack.Screen name="MAIN" component={MainScreen}/>
        <Stack.Screen name="DETAIL" component={DetailScreen}/>
        <Stack.Screen name="NOTI" component={NotiScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
 
export default App;