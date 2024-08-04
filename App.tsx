/* eslint-disable prettier/prettier */
// App.js
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialIcons';
import MainStackNavigator from './src/navigations/MainStackNavigator';
import QRScannerScreen from './src/screens/QRScannerScreen';

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Main') {
              iconName = 'home'; // MaterialIcons icon name for home
            } else if (route.name === 'QR Scanner') {
              iconName = 'qr-code'; // MaterialIcons icon name for QR code
            }

            // Adjust the size based on whether the tab is focused
            const iconSize = focused ? 35 : 25;

            return <Icon name={iconName} size={iconSize} color={color} />;
          },
          tabBarActiveTintColor: '#4CAF50', // Active icon color
          tabBarInactiveTintColor: 'gray', // Inactive icon color
          tabBarStyle: {
            height: 60, // Adjust tab bar height
            paddingBottom: 10, // Adjust padding at the bottom
          },
          tabBarLabelStyle: {
            fontSize: 12, // Adjust the size of the label text
          },
        })}
      >
        <Tab.Screen name="Main" component={MainStackNavigator} options={{headerShown:false}}/>
        <Tab.Screen name="QR Scanner" component={QRScannerScreen} options={{headerTitleAlign:'center'}}/>
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
