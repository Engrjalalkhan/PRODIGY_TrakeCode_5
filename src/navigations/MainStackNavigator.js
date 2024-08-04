/* eslint-disable prettier/prettier */
// src/navigation/MainStackNavigator.js
import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import CreateScreen from '../screens/CreateScreen';
import ScanScreen from '../screens/ScanScreen';
import SendScreen from '../screens/SendScreen';
import PrintScreen from '../screens/PrintScreen';

const Stack = createNativeStackNavigator();

const MainStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} options={{headerTitleAlign:'center'}}/>
    <Stack.Screen name="Create" component={CreateScreen} options={{headerTitleAlign:'center'}}/>
    <Stack.Screen name="Scan" component={ScanScreen} options={{headerTitleAlign:'center'}}/>
    <Stack.Screen name="Print" component={PrintScreen} options={{headerTitleAlign:'center'}}/>
    <Stack.Screen name="Send" component={SendScreen} options={{headerTitleAlign:'center'}}/>
    </Stack.Navigator>
  );
};

export default MainStackNavigator;
