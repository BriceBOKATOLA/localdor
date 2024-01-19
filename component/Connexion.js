import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Connexion from '../comp/Connexion';

import Inscription from '../comp/Inscription';
// import Home from './comp/Home';

const Stack = createStackNavigator();

function Connexions() {
  return (
      <Stack.Navigator>
        {/* <Stack.Screen name="Home" component={Home} /> */}
        <Stack.Screen name="Connexion" component={Connexion} />
        <Stack.Screen name="Inscription" component={Inscription} />
      </Stack.Navigator>
  );
}
export default Connexions