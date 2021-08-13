import React from 'react';
import { Button, View, Text, TouchableOpacity, StyleSheet } from 'react-native';


export default function TabADetailsScreen({ navigation }) {
    return (
      <View style={styles.container}>
        <Text>
          Pestaña A Homepage
        </Text>
        <Button
          onPress={() => navigation.navigate('TabA Details')}
          title="Ir a pestaña detalles"
        />

        <Button
          onPress={() => navigation.navigate('Map')}
          title="Ir a mapa"
        />


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