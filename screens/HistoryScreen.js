// HistoryScreen.js
import React, { useState, useEffect, useCallback } from 'react';
import { View, Text, FlatList, TouchableOpacity, RefreshControl, ActivityIndicator } from 'react-native';
import { dbFirestore } from '../firebase/firebaseConfig';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { auth } from '../firebase/firebaseConfig';
import tw from 'twrnc';

export default function HistoryScreen() {
  const [historyData, setHistoryData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);

  const fetchHistoryData = useCallback(async () => {
    try {
      const currentUser = auth.currentUser;
      if (!currentUser) return;

      const reportsQuery = query(
        collection(dbFirestore, 'Barang Hilang'), // Fetch from both collections
        where('userEmail', '==', currentUser.email)
      );

      const querySnapshot = await getDocs(reportsQuery);
      const reports = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      setHistoryData(reports);
    } catch (error) {
      console.error('Error fetching history data: ', error);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchHistoryData();
  }, [fetchHistoryData]);

  const onRefresh = useCallback(async () => {
    setRefreshing(true);
    await fetchHistoryData();
    setRefreshing(false);
  }, [fetchHistoryData]);

  if (loading) {
    return (
      <View style={tw`flex-1 justify-center items-center`}>
        <ActivityIndicator size="large" color="#0F254F" />
      </View>
    );
  }

  return (
    <View style={tw`flex-1 pt-12 px-5 bg-gray-100`}>
      <Text style={tw`text-2xl font-bold mb-5 text-[#000000]`}>Riwayat Laporan</Text>

      <FlatList
        data={historyData}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={tw`p-4 mb-4 bg-white rounded-xl shadow-lg`}>
            <Text style={tw`text-lg font-bold`}>{item.itemName}</Text>
            <Text style={tw`italic text-sm text-gray-600`}>
              Lokasi: {item.locationLost || item.locationFound}
            </Text>
          </View>
        )}
        refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
      />
    </View>
  );
}
