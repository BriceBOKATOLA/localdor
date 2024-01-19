import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Home from './component/Home';
import Favorie from './component/Favorie';
import Recherche from './component/Recherche';
import chatbubble from './component/chatbubble';
import Connexion from './component/Connexion';

const Tabs =createBottomTabNavigator();

function App () {
  return (
    <NavigationContainer>
      <Tabs.Navigator  screenOptions={({ route }) => ({

        headerShown : false,

          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            // condition pour le changement de couleur du menu selectionné
            if (route.name === 'Home') {
              iconName = focused
                ? 'home'
                : 'home-outline';
            } else if (route.name === 'Favorie') {
              iconName = focused ? 'heart' : 'heart-outline';
            }
             else if (route.name === 'Recherche') {
              iconName = focused ? 'search' : 'search-outline';
            }
             else if (route.name === 'chatbubble') {
              iconName = focused ? 'chatbubble' : 'chatbubble-outline';
            }
            else if (route.name === 'Connexion') {
              iconName = focused ? 'person' : 'person-outline';
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
          // differentes couleurs
          tabBarActiveTintColor: 'orange',
          tabBarInactiveTintColor: 'black',
        })}
       >

		{/* menu de navigation  */}
        <Tabs.Screen name='Home' component={Home}/>
        <Tabs.Screen name='Favorie' component={Favorie}/>
        <Tabs.Screen name='Recherche' component={Recherche}/>
        <Tabs.Screen name='chatbubble' component={chatbubble}/>
        <Tabs.Screen name='Connexion' component={Connexion}/>

      </Tabs.Navigator>


    </NavigationContainer>
  );
}

export default App