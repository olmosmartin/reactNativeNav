import React from 'react';
import { Button, View, Text, TouchableOpacity, StyleSheet } from 'react-native';

import Details from './Details';
import TabADetailsScreen from './TabADetailsScreen';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Map from './Map';
import TabBScreen from './TabBScreen'

const Stack = createStackNavigator();
export default function TabAScreen({ navigation }) {
  return (
    <Stack.Navigator>
      <Stack.Screen name="TabA Home" component={TabADetailsScreen}
        options={{
          headerTitle: "Titulo A",
          headerRight: () => (
            <TouchableOpacity
              style={styles.button}
              onPress={()=>{navigation.openDrawer();}}
            >
              <Text> Menu </Text>
            </TouchableOpacity>

          ),
        }} />
      <Stack.Screen name="TabA Details" component={Details} />
      
      {
      // <Stack.Screen name="Mapa3" component={Map} />
     }
      
    </Stack.Navigator>
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