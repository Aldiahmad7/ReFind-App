import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Home</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'top',
    alignItems: 'left',
    marginTop: 50,
    marginLeft: 20,
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});