import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import tw from 'twrnc';

export default function LostItemForm({ onClose }) {
  const [itemName, setItemName] = useState('');
  const [itemDescription, setItemDescription] = useState('');
  const [locationFound, setLocationFound] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  // Function to handle form submission
  const handleSubmit = () => {
    if (!itemName || !itemDescription || !locationFound || !phoneNumber) {
      alert('ISI DULU KOCAG!!!');
    } else {
      // Submit the data (example: log it to console)
      console.log({ itemName, itemDescription, locationFound, phoneNumber });
      onClose();  // Close modal after submission
    }
  };

  return (
    <View style={tw`bg-white p-5 rounded-xl`}>
      <Text style={tw`text-xl font-bold text-center text-black mb-3`}>Form Penemuan</Text>

      <TextInput
        style={tw`border border-gray-300 rounded-xl p-3 mb-3`}
        placeholder="Nama Barang"
        value={itemName}
        onChangeText={setItemName}
      />
      <TextInput
        style={tw`border border-gray-300 rounded-xl p-3 mb-3`}
        placeholder="Deskripsi Barang"
        value={itemDescription}
        onChangeText={setItemDescription}
      />
      <TextInput
        style={tw`border border-gray-300 rounded-xl p-3 mb-3`}
        placeholder="Lokasi Ditemukan"
        value={locationFound}
        onChangeText={setLocationFound}
      />
      <TextInput
        style={tw`border border-gray-300 rounded-xl p-3 mb-3`}
        placeholder="No. HP"
        value={phoneNumber}
        onChangeText={setPhoneNumber}
      />

      <TouchableOpacity style={tw`bg-gray-300 w-2/5 h-8 rounded-xl flex justify-center items-center mx-auto mb-5`}>
        <Text style={tw`text-white font-bold`}>Upload File</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={tw`bg-green-500 p-3 rounded-xl flex justify-center items-center`}
        onPress={handleSubmit}  // Call handleSubmit function on press
      >
        <Text style={tw`text-white font-bold`}>SUBMIT</Text>
      </TouchableOpacity>
    </View>
  );
}
