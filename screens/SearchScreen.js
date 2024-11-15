import React, { useState } from 'react';
import { View, Text, TouchableOpacity, FlatList } from 'react-native';
import tw from 'twrnc';  // Importing twrnc for styling

export default function SearchScreen() {
  const [selectedMenu, setSelectedMenu] = useState('Kehilangan');
  const lostItems = [
    { id: '1', name: 'Dompet Hitam', description: 'Hilang di Mushola perpustakaan', reportedBy: 'Leonel Aldi' },
    { id: '2', name: 'Kunci Motor', description: 'Hilang di ruang kelas B1 B2', reportedBy: 'Mykhailo Rafi' },
  ];

  const foundItems = [
    { id: '1', name: 'Kacamata', description: 'Ditemukan di kantin perpustakaan', reportedBy: 'Cristiano Rifqi' },
    { id: '2', name: 'Hp Mito', description: 'Ditemukan di kantin Fasilkom', reportedBy: 'Erling Anap' },
  ];
  const dataToDisplay = selectedMenu === 'Kehilangan' ? lostItems : selectedMenu === 'Penemuan' ? foundItems : [];

  return (
    <View style={tw`flex-1 pt-12 px-5 bg-white`}>
      <Text style={tw`text-2xl font-bold mb-5`}>Search</Text>

      <View style={tw`flex-row h-10 w-52 mb-5 rounded-full bg-gray-200 overflow-hidden self-center`}>
        <TouchableOpacity
          style={[
            tw`flex-1 py-2 items-center`,
            selectedMenu === 'Kehilangan' && tw`bg-[#0F254F]`,
            { borderTopLeftRadius: 10, borderBottomLeftRadius: 10 },
          ]}
          onPress={() => setSelectedMenu('Kehilangan')}
        >
          <Text style={[tw`text-sm font-bold`, selectedMenu === 'Kehilangan' && tw`text-white`]}>
            Kehilangan
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            tw`flex-1 py-2 items-center`,
            selectedMenu === 'Penemuan' && tw`bg-[#0F254F]`,
            { borderTopRightRadius: 10, borderBottomRightRadius: 10 },
          ]}
          onPress={() => setSelectedMenu('Penemuan')}
        >
          <Text style={[tw`text-sm font-bold`, selectedMenu === 'Penemuan' && tw`text-white`]}>
            Penemuan
          </Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={dataToDisplay}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={tw`p-4 border-b border-gray-300`}>
            <Text style={tw`text-lg font-bold`}>{item.name}</Text>
            <Text style={tw`text-sm text-gray-600`}>{item.description}</Text>
            <Text style={tw`text-xs text-gray-800 italic`}>Dilaporkan oleh: {item.reportedBy}</Text>
          </View>
        )}
      />
    </View>
  );
}
