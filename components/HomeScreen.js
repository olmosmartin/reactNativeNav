import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import { Ionicons } from '@expo/vector-icons';
import TabAScreen from './TabAScreen';
import TabBScreen from './TabBScreen';
import MapScreen from './MapScreen';



const Tab = createBottomTabNavigator();
export default function HomeScreen() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === 'TabA') {
            iconName = focused
              ? 'ios-home'
              : 'ios-home-outline';
          } else if (route.name === 'TabB') {
            iconName = focused
              ? 'ios-reader'
              : 'ios-reader-outline';
          } else if (route.name === 'Map'){
            iconName = focused
              ? 'ios-map'
              : 'ios-map-outline';
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: 'tomato',
        inactiveTintColor: 'gray',
      }}
    >
      <Tab.Screen name="TabA" component={TabAScreen} />
      <Tab.Screen name="TabB" component={TabBScreen} />
      <Tab.Screen name="Map" component={MapScreen}  />

    </Tab.Navigator>
  );
}

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });