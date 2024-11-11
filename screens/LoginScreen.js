import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function LoginScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigation = useNavigation();

  const handleLogin = () => {
    if (!email || !password) {
      setErrorMessage('Email dan Password Harus Diisi');
    } else {
      setErrorMessage('');
      console.log('Email:', email);
      console.log('Password:', password);

      navigation.navigate('HomeTabs'); // Navigasi ke HomeTabs setelah login
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>ReFind</Text>

      {errorMessage ? (
        <Text style={styles.errorText}>{errorMessage}</Text>
      ) : null}

      <TextInput
        style={styles.input}
        placeholder="Email"
        keyboardType="email-address"
        value={email}
        onChangeText={(text) => setEmail(text)}
      />

      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={(text) => setPassword(text)}
      />

      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 70,
    fontWeight: 'bold',
    marginBottom: 50,
    color: '#0F254F', // Menambahkan gap lebih kecil antara judul dan input
    // marginTop: 1,
  },
  input: {
    width: '100%',
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 15,
    paddingHorizontal: 20,
    marginBottom: 15,
  },
  button: {
    width: '50%',
    height: 40,
    backgroundColor: '#0F254F',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 15,
    marginTop: 30, // Menambahkan marginTop untuk memberi jarak antara input dan tombol
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  errorText: {
    color: 'red',
    marginBottom: 10,
  },
});
