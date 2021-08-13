import React from 'react';
import { Button, View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import Map from './Map';


const Stack = createStackNavigator();
export default function MapScreen({ navigation }) {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Map" component={Map}
        options={{
          headerTitle: "Mapa",
          headerRight: () => (
            <TouchableOpacity
              style={styles.button}
              onPress={()=>{navigation.openDrawer();}}
            >
              <Text> Menu </Text>
            </TouchableOpacity>

          ),
        }} />
      
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