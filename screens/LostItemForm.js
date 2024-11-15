import React from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import tw from 'twrnc';  // Importing twrnc for styling

export default function LostItemForm({ onClose }) {
  return (
    <View style={tw`bg-white p-5 rounded-xl`}>
      <Text style={tw`text-2xl font-bold text-center text-black mb-2`}>KEHILANGAN</Text>
      
      <TextInput style={tw`border border-gray-300 rounded-lg p-3 mb-3`} placeholder="Nama Barang" />
      <TextInput style={tw`border border-gray-300 rounded-lg p-3 mb-3`} placeholder="Deskripsi Barang" />
      <TextInput style={tw`border border-gray-300 rounded-lg p-3 mb-3`} placeholder="Lokasi Terakhir" />
      <TextInput style={tw`border border-gray-300 rounded-lg p-3 mb-3`} placeholder="No. HP" />
      
      <TouchableOpacity style={tw`bg-gray-400 w-2/5 h-8 rounded-lg justify-center items-center mb-5 mx-auto`}>
        <Text style={tw`text-white font-bold`}>Upload File</Text>
      </TouchableOpacity>
      
      <TouchableOpacity style={tw`bg-green-500 py-2 rounded-lg items-center`} onPress={onClose}>
        <Text style={tw`text-white font-bold`}>SUBMIT</Text>
      </TouchableOpacity>
    </View>
  );
}
