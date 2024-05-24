import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Homescreen from './screens/home/Homescreen';
import Start from './screens/home/Start';
import ReadChapter from './componenets/ReadChapter';
import Simulation from './componenets/Simulation';
import Deadlock from './screens/simulations/Deadlock';
import DeadlockMatrix from './screens/simulations/DeadlockMatrix';
import ReviewQuestions from './screens/home/ReviewQuestions';

const Stack = createNativeStackNavigator();

export default function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Home' component={Homescreen} options={{headerShown: false}}/>
        <Stack.Screen name='Start' component={Start} options={{headerShown: false}}/>
        <Stack.Screen name='Read' component={ReadChapter} options={{headerShown: false}}/>
        <Stack.Screen name='ReviewQuestions' component={ReviewQuestions} options={{headerShown: false}}/>
        <Stack.Screen name='Simulation' component={Simulation} options={{headerShown: false}}/>
        <Stack.Screen name='Deadlock' component={Deadlock} options={{headerShown: false}}/>
        <Stack.Screen name='DeadlockMatrix' component={DeadlockMatrix} options={{headerShown: false}}/>

      </Stack.Navigator>
    </NavigationContainer>
  )
}
