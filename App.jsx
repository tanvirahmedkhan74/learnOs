import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Homescreen from './screens/home/Homescreen';
import Start from './screens/home/Start';
import ReadChapter from './componenets/ReadChapter';
import Simulation from './componenets/Simulation';

const Stack = createNativeStackNavigator();

export default function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Home' component={Homescreen} options={{headerShown: false}}/>
        <Stack.Screen name='Start' component={Start} options={{headerShown: false}}/>
        <Stack.Screen name='Read' component={ReadChapter} options={{headerShown: false}}/>
        <Stack.Screen name='Simulation' component={Simulation} options={{headerShown: false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}
