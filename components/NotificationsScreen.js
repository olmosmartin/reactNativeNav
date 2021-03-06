import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';


export default function NotificationsScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>Pestaña de notificaciones</Text>
      <Button
        onPress={() => navigation.goBack()}
        title="Volver"
      />
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
  });