import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function ProfileScreen() {
  const navigation = useNavigation();

  const handleLogout = () => {
    // Navigasi ke screen Login setelah logout
    navigation.navigate('Login');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Profile</Text>

      <TouchableOpacity style={styles.button} onPress={handleLogout}>
        <Text style={styles.buttonText}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start', // Menjaga Profile tetap di atas
    alignItems: 'flex-start', // Menjaga Profile tetap di kiri
    marginTop: 50,
    marginLeft: 20,
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  button: {
    position: 'absolute', // Posisi absolute agar bisa diposisikan secara spesifik
    bottom: 20, // Jarak 30 dari bawah layar
    left: '47%', // Menempatkan tombol di tengah horizontal layar
    transform: [{ translateX: -75 }], // Menyeimbangkan tombol agar tepat di tengah
    width: 150, // Lebar tombol
    height: 40, // Tinggi tombol
    backgroundColor: '#FF2626',
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 15,
    fontWeight: 'bold',
  },
});
