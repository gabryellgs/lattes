import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from './src/pages/Home';
import Perfil from './src/pages/Profile';
import Education from './src/pages/Education';
import Courses from './src/pages/Courses';
import Formations from './src/pages/Formations';
import Skills from './src/pages/Skills';
import Links from './src/pages/Links';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Perfil" component={Perfil} />
        <Stack.Screen name="Education" component={Education} />
        <Stack.Screen name="Courses" component={Courses} />
        <Stack.Screen name="Formations" component={Formations} />
        <Stack.Screen name="Skills" component={Skills} />
        <Stack.Screen name="Links" component={Links} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}