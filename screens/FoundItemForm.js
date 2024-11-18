import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import tw from 'twrnc';

export default function LostItemForm({ onClose }) {
  const [itemName, setItemName] = useState('');
  const [itemDescription, setItemDescription] = useState('');
  const [locationFound, setLocationFound] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [selectedImage, setSelectedImage] = useState(null); // State untuk gambar

  const handleSubmit = () => {
    if (!itemName || !itemDescription || !locationFound || !phoneNumber) {
      alert('ISI DULU KOCAG!!!');
    } else {
      console.log({ itemName, itemDescription, locationFound, phoneNumber, selectedImage });
      onClose();
    }
  };

  const pickImage = async () => {
    const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (permissionResult.granted === false) {
      alert('Izin untuk mengakses galeri diperlukan!');
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled) {
      setSelectedImage(result.assets[0].uri);
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

      <TouchableOpacity
        style={tw`bg-gray-300 w-2/5 h-8 rounded-xl flex justify-center items-center mx-auto mb-5`}
        onPress={pickImage}
      >
        <Text style={tw`text-white font-bold`}>Upload File</Text>
      </TouchableOpacity>

      {selectedImage && (
        <Image
          source={{ uri: selectedImage }}
          style={tw`w-20 h-20 rounded-xl mx-auto`}
        />
      )}

      <TouchableOpacity
        style={tw`bg-green-500 p-3 rounded-xl flex justify-center items-center`}
        onPress={handleSubmit}
      >
        <Text style={tw`text-white font-bold`}>SUBMIT</Text>
      </TouchableOpacity>
    </View>
  );
}
