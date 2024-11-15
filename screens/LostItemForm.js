import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import tw from 'twrnc';  // Importing twrnc for styling

export default function LostItemForm({ onClose }) {
  // State untuk menyimpan input form
  const [itemName, setItemName] = useState('');
  const [itemDescription, setItemDescription] = useState('');
  const [locationLost, setLocationLost] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  // Fungsi untuk menangani submit
  const handleSubmit = () => {
    if (!itemName || !itemDescription || !locationLost || !phoneNumber) {
      alert('ISI DULU KOCAG!!!');
    } else {
      // Log data yang diisi sebagai contoh
      console.log({ itemName, itemDescription, locationLost, phoneNumber });
      onClose();  // Menutup modal setelah submit
    }
  };

  return (
    <View style={tw`bg-white p-5 rounded-xl`}>
      <Text style={tw`text-2xl font-bold text-center text-black mb-2`}>Form Kehilangan</Text>
      
      {/* Input untuk Nama Barang */}
      <TextInput
        style={tw`border border-gray-300 rounded-lg p-3 mb-3`}
        placeholder="Nama Barang"
        value={itemName}
        onChangeText={setItemName}
      />
      
      {/* Input untuk Deskripsi Barang */}
      <TextInput
        style={tw`border border-gray-300 rounded-lg p-3 mb-3`}
        placeholder="Deskripsi Barang"
        value={itemDescription}
        onChangeText={setItemDescription}
      />
      
      {/* Input untuk Lokasi Terakhir Barang Ditemukan */}
      <TextInput
        style={tw`border border-gray-300 rounded-lg p-3 mb-3`}
        placeholder="Lokasi Terakhir"
        value={locationLost}
        onChangeText={setLocationLost}
      />
      
      {/* Input untuk Nomor HP */}
      <TextInput
        style={tw`border border-gray-300 rounded-lg p-3 mb-3`}
        placeholder="No. HP"
        value={phoneNumber}
        onChangeText={setPhoneNumber}
      />
      
      {/* Tombol untuk Upload File */}
      <TouchableOpacity
        style={tw`bg-gray-400 w-2/5 h-8 rounded-lg justify-center items-center mb-5 mx-auto`}
      >
        <Text style={tw`text-white font-bold`}>Upload File</Text>
      </TouchableOpacity>
      
      {/* Tombol Submit */}
      <TouchableOpacity
        style={tw`bg-green-500 py-2 rounded-lg items-center`}
        onPress={handleSubmit}  // Panggil handleSubmit saat ditekan
      >
        <Text style={tw`text-white font-bold`}>SUBMIT</Text>
      </TouchableOpacity>
    </View>
  );
}
