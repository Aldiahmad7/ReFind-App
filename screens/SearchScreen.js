import React, { useState, useEffect, useCallback } from 'react';
import { View, Text, TouchableOpacity, FlatList, RefreshControl, TextInput } from 'react-native';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebase/firebaseConfig';
import tw from 'twrnc';

export default function SearchScreen() {
  const [selectedMenu, setSelectedMenu] = useState('Kehilangan');
  const [penemuan, setPenemuan] = useState([]);
  const [kehilangan, setKehilangan] = useState([]);
  const [refreshing, setRefreshing] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const fetchPenemuan = useCallback(async () => {
    try {
      const querySnapshots = await getDocs(collection(db, 'Barang Ditemukan'));
      const penemuanData = querySnapshots.docs.map((docSnap) => ({
        id: docSnap.id,
        ...docSnap.data(),
      }));
      setPenemuan(penemuanData);
    } catch (error) {
      console.error('Error fetching data: ', error);
    }
  }, []);

  const fetchKehilangan = useCallback(async () => {
    try {
      const querySnapshots = await getDocs(collection(db, 'Barang Hilang'));
      const kehilanganData = querySnapshots.docs.map((docSnap) => ({
        id: docSnap.id,
        ...docSnap.data(),
      }));
      setKehilangan(kehilanganData);
    } catch (error) {
      console.error('Error fetching data: ', error);
    }
  }, []);

  useEffect(() => {
    fetchPenemuan();
    fetchKehilangan();
  }, [fetchPenemuan, fetchKehilangan]);

  const onRefresh = useCallback(async () => {
    setRefreshing(true);
    await Promise.all([fetchPenemuan(), fetchKehilangan()]);
    setRefreshing(false);
  }, [fetchPenemuan, fetchKehilangan]);

  const dataToDisplay = selectedMenu === 'Penemuan' ? penemuan : kehilangan;

  const filteredData = dataToDisplay.filter((item) =>
    item.itemName.toLowerCase().includes(searchQuery.toLowerCase())
  );

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

      <TextInput
        style={tw`border border-gray-300 rounded-xl p-3 mb-5`}
        placeholder="Cari berdasarkan nama barang..."
        value={searchQuery}
        onChangeText={setSearchQuery}
      />

      <FlatList
        data={filteredData}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={tw`p-4 border-b border-gray-300`}>
            <Text style={tw`text-lg font-bold`}>{item.itemName}</Text>
            <Text style={tw`text-sm text-gray-600`}>{item.itemDescription}</Text>
            <Text style={tw`text-sm text-gray-600`}>
              Lokasi: {selectedMenu === 'Penemuan' ? item.locationFound : item.locationLost}
            </Text>
            <Text style={tw`text-sm text-gray-600`}>No. HP: {item.phoneNumber}</Text>
          </View>
        )}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      />
    </View>
  );
}
