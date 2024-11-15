import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import tw from 'twrnc'; 

export default function LostItemForm({ onClose }) {
  const [itemName, setItemName] = useState('');
  const [itemDescription, setItemDescription] = useState('');
  const [locationLost, setLocationLost] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  const handleSubmit = () => {
    if (!itemName || !itemDescription || !locationLost || !phoneNumber) {
      alert('ISI DULU KOCAG!!!');
    } else {
      console.log({ itemName, itemDescription, locationLost, phoneNumber });
      onClose(); 
    }
  };

  return (
    <View style={tw`bg-white p-5 rounded-xl`}>
      <Text style={tw`text-2xl font-bold text-center text-black mb-2`}>Form Kehilangan</Text>
      
      <TextInput
        style={tw`border border-gray-300 rounded-lg p-3 mb-3`}
        placeholder="Nama Barang"
        value={itemName}
        onChangeText={setItemName}
      />
      
      <TextInput
        style={tw`border border-gray-300 rounded-lg p-3 mb-3`}
        placeholder="Deskripsi Barang"
        value={itemDescription}
        onChangeText={setItemDescription}
      />
      
      <TextInput
        style={tw`border border-gray-300 rounded-lg p-3 mb-3`}
        placeholder="Lokasi Terakhir"
        value={locationLost}
        onChangeText={setLocationLost}
      />
      
      <TextInput
        style={tw`border border-gray-300 rounded-lg p-3 mb-3`}
        placeholder="No. HP"
        value={phoneNumber}
        onChangeText={setPhoneNumber}
      />
      
      <TouchableOpacity
        style={tw`bg-gray-400 w-2/5 h-8 rounded-lg justify-center items-center mb-5 mx-auto`}
      >
        <Text style={tw`text-white font-bold`}>Upload File</Text>
      </TouchableOpacity>
      
      <TouchableOpacity
        style={tw`bg-green-500 py-2 rounded-lg items-center`}
        onPress={handleSubmit} 
      >
        <Text style={tw`text-white font-bold`}>SUBMIT</Text>
      </TouchableOpacity>
    </View>
  );
}
