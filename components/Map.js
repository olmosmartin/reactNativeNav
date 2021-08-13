import React from 'react';
import { View, Text, StyleSheet } from 'react-native';


export default function TabBDetailsScreen({ navigation }) {
    return (
      <View style={styles.container}>
        <Text>
          Mapa
        </Text>

      </View>
    );
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      paddingHorizontal: 10,
      alignItems: 'center' 
    },

  });