import React, { useState } from 'react';
import { Text, View, TextInput, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase/firebaseConfig';
import tw from 'twrnc';  // Import twrnc untuk gaya

export default function LoginScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigation = useNavigation();

  const handleLogin = async () => {
    if (!email || !password) {
      setErrorMessage('Email dan Password Harus Diisi');
      return;
    }
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigation.navigate('HomeTabs');
      setErrorMessage('');
    } catch (error) {
      if (
        error.code === 'auth/invalid-email' ||
        error.code === 'auth/invalid-credential' ||
        error.code === 'auth/too-many-requests'
      ) {
        setErrorMessage('Email atau password salah');
      } else {
        setErrorMessage(error.message);
      }
    }
  };

  return (
    <View style={tw`flex-1 items-center justify-center bg-white p-5`}>
      <Text style={tw`text-6xl font-bold text-[#0F254F] mb-12`}>ReFind</Text>

      {errorMessage ? (
        <Text style={tw`text-red-500 mb-4`}>{errorMessage}</Text>
      ) : null}

      <TextInput
        style={tw`w-full h-12 border border-gray-300 rounded-lg px-4 mb-4`}
        placeholder="Email"
        keyboardType="email-address"
        value={email}
        onChangeText={(text) => setEmail(text)}
      />

      <TextInput
        style={tw`w-full h-12 border border-gray-300 rounded-lg px-4 mb-4`}
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={(text) => setPassword(text)}
      />

      <TouchableOpacity
        style={tw`w-full h-12 bg-[#0F254F] rounded-lg items-center justify-center mt-6`}
        onPress={handleLogin}
      >
        <Text style={tw`text-white text-lg font-bold`}>Login</Text>
      </TouchableOpacity>
    </View>
  );
}
