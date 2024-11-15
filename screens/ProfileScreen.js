import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import tw from 'twrnc';

export default function ProfileScreen() {
  const navigation = useNavigation();

  const handleLogout = () => {
    navigation.navigate('Login');
  };

  return (
    <View style={tw`flex-1 pt-12 px-5 bg-white`}>
      <Text style={tw`text-2xl font-bold mb-5`}>Profile</Text>

      <View style={tw`w-full items-center bg-[#000033] py-8 rounded-b-2xl`}>
        <View style={tw`w-20 h-20 bg-[#D9D9D9] rounded-full justify-center items-center mb-2`}>
          <Icon name="person" size={40} color="#808080" />
        </View>
        <Text style={tw`text-white text-2xl font-bold mb-1`}>ALDI AHMAD DANI</Text>
        <Text style={tw`text-white text-lg`}>232410103074</Text>
      </View>

      {/* Tombol Riwayat Laporan diratakan kiri kanan */}
      <TouchableOpacity style={tw`flex-row items-center bg-[#F5F5F5] p-4 rounded-xl w-full mt-5`}>
        <Icon name="history" size={24} color="#000" style={tw`mr-3`} />
        <Text style={tw`text-lg text-black`}>Riwayat Laporan</Text>
      </TouchableOpacity>

      {/* Kontainer untuk tombol Logout */}
      <View style={tw`flex-1 justify-end items-center pb-10`}>
        <TouchableOpacity
          style={tw`w-36 h-10 bg-[#FF2626] rounded-xl justify-center items-center`}
          onPress={handleLogout}
        >
          <Text style={tw`text-white text-lg font-bold`}>Logout</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
