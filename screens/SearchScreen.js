import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function SearchScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Search</Text>
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
