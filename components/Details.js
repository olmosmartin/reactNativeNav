import React from 'react';
import { Button, View, Text, TouchableOpacity, StyleSheet } from 'react-native';



export default function Details() {
    return (
      <View style={styles.container}>
        <Text>
          Detalles de pestaña A
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