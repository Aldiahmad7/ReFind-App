import React, { useState } from 'react';
import { Text, View, TextInput, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase/firebaseConfig';
import tw from 'twrnc';

export default function LoginScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigation = useNavigation();

  // Tentukan email dan password admin
  const adminEmail = "admin@example.com";   // Ganti dengan email admin yang valid di Firebase
  const adminPassword = "adminpassword";    // Ganti dengan password admin yang valid di Firebase

  const handleLogin = async () => {
    if (!email || !password) {
      setErrorMessage('Email dan Password Harus Diisi');
      return;
    }

    try {
      // Autentikasi dengan Firebase
      await signInWithEmailAndPassword(auth, email, password);

      // Periksa apakah email dan password cocok dengan akun admin
      if (email === adminEmail && password === adminPassword) {
        navigation.navigate('AdminScreen'); // Arahkan ke halaman AdminScreen jika akun admin
      } else {
        navigation.navigate('HomeTabs'); // Arahkan ke halaman HomeTabs jika akun pengguna biasa
      }

      setErrorMessage('');
    } catch (error) {
      // Tangani kesalahan login
      if (
        error.code === 'auth/invalid-email' ||
        error.code === 'auth/invalid-credential' ||
        error.code === 'auth/too-many-requests' ||
        error.code === 'auth/wrong-password'
      ) {
        setErrorMessage('Email atau password salah');
      } else if (error.code === 'auth/user-not-found') {
        setErrorMessage('Pengguna tidak ditemukan');
      } else {
        setErrorMessage(error.message);
      }
    }
  };

  return (
    <View style={tw`flex-1 items-center justify-center bg-white p-5`}>
      <Image
        source={require('../assets/logo.png')} 
        style={tw`w-25 h-25 mb-5`} 
        resizeMode="contain" 
      />

      <Text style={tw`text-4xl font-bold text-[#0F254F] mb-12`}>ReFind</Text>

      <View style={tw`w-full`}>
        <Text style={tw`text-gray-600 mb-2 text-base`}>Email</Text>
        <TextInput
          style={tw`w-full h-12 bg-gray-100 rounded-lg px-4 mb-2`}
          placeholder="Masukkan email"
          value={email}
          onChangeText={setEmail}
        />

        <Text style={tw`text-gray-600 mb-2 text-base`}>Password</Text>
        <TextInput
          style={tw`w-full h-12 bg-gray-100 rounded-lg px-4 mb-4`}
          placeholder="Masukkan password"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />

        <TouchableOpacity
          style={tw`w-full h-12 bg-[#0F254F] rounded-lg items-center justify-center`}
          onPress={handleLogin}
        >
          <Text style={tw`text-white text-lg font-semibold`}>Login</Text>
        </TouchableOpacity>

        {errorMessage ? (
          <Text style={tw`text-red-500 text-center mt-4`}>{errorMessage}</Text>
        ) : null}
      </View>
    </View>
  );
}
