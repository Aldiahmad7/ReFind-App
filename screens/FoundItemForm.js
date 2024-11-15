import React from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import tw from 'twrnc';

export default function LostItemForm({ onClose }) {
  return (
    <View style={tw`bg-white p-5 rounded-xl`}>
      <Text style={tw`text-xl font-bold text-center text-black mb-3`}>PENEMUAN</Text>
      
      <TextInput
        style={tw`border border-gray-300 rounded-xl p-3 mb-3`}
        placeholder="Nama Barang"
      />
      <TextInput
        style={tw`border border-gray-300 rounded-xl p-3 mb-3`}
        placeholder="Deskripsi Barang"
      />
      <TextInput
        style={tw`border border-gray-300 rounded-xl p-3 mb-3`}
        placeholder="Lokasi Ditemukan"
      />
      <TextInput
        style={tw`border border-gray-300 rounded-xl p-3 mb-3`}
        placeholder="No. HP"
      />
      
      <TouchableOpacity style={tw`bg-gray-300 w-2/5 h-8 rounded-xl flex justify-center items-center mx-auto mb-5`}>
        <Text style={tw`text-white font-bold`}>Upload File</Text>
      </TouchableOpacity>
      
      <TouchableOpacity
        style={tw`bg-green-500 p-3 rounded-xl flex justify-center items-center`}
        onPress={onClose}
      >
        <Text style={tw`text-white font-bold`}>SUBMIT</Text>
      </TouchableOpacity>
    </View>
  );
}
