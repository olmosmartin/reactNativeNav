import React from 'react';
import { Button, View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import TabBDetailsScreen from './TabBDetailsScreen'


const Stack = createStackNavigator();
export default function TabBScreen({ navigation }) {
    return (
      <Stack.Navigator>
        <Stack.Screen name="TabB Home" component={TabBDetailsScreen}
          options={{
            headerTitle: "Titulo B",
            headerRight: () => (
              <TouchableOpacity
                style={styles.button}
                onPress={() => { navigation.openDrawer(); }}
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