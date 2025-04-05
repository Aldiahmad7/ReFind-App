import React, { useState } from 'react';
import { Text, View, TextInput, TouchableOpacity, Image, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth, db } from '../firebase/firebaseConfig';
import { doc, setDoc } from 'firebase/firestore';
import tw from 'twrnc';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default function RegistrationScreen() {
  const [nama, setNama] = useState('');
  const [nim, setNim] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const navigation = useNavigation();

  const handleRegistration = async () => { 
    if (!nama || !nim || !email || !password) {
      setErrorMessage('Semua field harus diisi');
      return;
    }

    if (nim.length < 10) {
      setErrorMessage('NIM minimal 10 karakter');
      return;
    }

    if (password.length < 6) {
      setErrorMessage('Password minimal 6 karakter');
      return;
    }

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      await setDoc(doc(db, "users", user.uid), {
        nama: nama,
        nim: nim,
        email: email,
        createdAt: new Date(),
        role: "mahasiswa"
      });

      navigation.navigate('LoginScreen');
      
    } catch (error) {
      if (error.code === 'auth/email-already-in-use') {
        setErrorMessage('Email sudah digunakan');
      } else if (error.code === 'auth/invalid-email') {
        setErrorMessage('Format email tidak valid');
      } else if (error.code === 'auth/weak-password') {
        setErrorMessage('Password terlalu lemah');
      } else {
        setErrorMessage(error.message);
      }
    }
  };

  return (
    <ScrollView contentContainerStyle={tw`flex-grow`}>
      <View style={tw`flex-1 items-center justify-center bg-white p-5`}>
        <Text style={tw`text-2xl font-bold text-gray-700 mb-10`}>Registrasi Akun</Text>

        <View style={tw`w-full`}>
          <Text style={tw`text-gray-600 mb-2 text-base`}>Nama Lengkap</Text>
          <TextInput
            style={tw`w-full h-12 bg-gray-100 rounded-lg px-4 mb-4`}
            placeholder="Masukkan nama lengkap"
            value={nama}
            onChangeText={setNama}
          />

          <Text style={tw`text-gray-600 mb-2 text-base`}>NIM</Text>
          <TextInput
            style={tw`w-full h-12 bg-gray-100 rounded-lg px-4 mb-4`}
            placeholder="Masukkan NIM"
            value={nim}
            onChangeText={setNim}
            keyboardType="numeric"
          />

          <Text style={tw`text-gray-600 mb-2 text-base`}>Email</Text>
          <TextInput
            style={tw`w-full h-12 bg-gray-100 rounded-lg px-4 mb-4`}
            placeholder="Masukkan email"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
          />

          <Text style={tw`text-gray-600 mb-2 text-base`}>Password</Text>
          <View style={tw`relative`}>
            <TextInput
              style={tw`w-full h-12 bg-gray-100 rounded-lg px-4 pr-12 mb-6`}
              placeholder="Masukkan password"
              secureTextEntry={!passwordVisible} 
              value={password}
              onChangeText={setPassword}
            />
            <TouchableOpacity
              style={tw`absolute right-4 top-3`}
              onPress={() => setPasswordVisible(!passwordVisible)}
            >
              <Icon 
                name={passwordVisible ? "visibility" : "visibility-off"} 
                size={24} 
                color="gray" 
              />
            </TouchableOpacity>
          </View>

          <TouchableOpacity
            style={tw`w-full h-12 bg-[#0F254F] rounded-lg items-center justify-center`}
            onPress={handleRegistration}
          >
            <Text style={tw`text-white text-lg font-semibold`}>Daftar</Text>
          </TouchableOpacity>

          {errorMessage ? (
            <Text style={tw`text-red-500 text-center mt-4`}>{errorMessage}</Text>
          ) : null}
          
          <View style={tw`flex-row justify-center mt-4`}>
            <Text style={tw`text-gray-600 mr-1`}>Sudah punya akun?</Text>
            <TouchableOpacity onPress={() => navigation.navigate('Login')}>
              <Text style={tw`text-[#0F254F] font-semibold`}>Login</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}