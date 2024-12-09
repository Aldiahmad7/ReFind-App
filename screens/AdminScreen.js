import React, { useState, useEffect, useCallback, createContext, useContext } from 'react';
import { View, Text, TouchableOpacity, FlatList, TextInput, RefreshControl, Modal, Animated, Linking, Alert, Image } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import tw from 'twrnc';
import { getDocs, collection, deleteDoc, doc, onSnapshot } from 'firebase/firestore';
import { db } from '../firebase/firebaseConfig';
import AdminProfileScreen from './AdminProfileScreen';

const DataContext = createContext();

export function DataProvider({ children }) {
  const [kehilangan, setKehilangan] = useState([]);
  const [penemuan, setPenemuan] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchData = useCallback(async () => {
    try {
      const kehilanganSnap = await getDocs(collection(db, 'Barang Hilang'));
      const penemuanSnap = await getDocs(collection(db, 'Barang Ditemukan'));

      const kehilanganData = kehilanganSnap.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      const penemuanData = penemuanSnap.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      setKehilangan(kehilanganData);
      setPenemuan(penemuanData);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching data: ', error);
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    const kehilanganRef = collection(db, 'Barang Hilang');
    const penemuanRef = collection(db, 'Barang Ditemukan');

    const unsubscribeKehilangan = onSnapshot(kehilanganRef, (snapshot) => {
      const updatedKehilangan = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setKehilangan(updatedKehilangan);
    });

    const unsubscribePenemuan = onSnapshot(penemuanRef, (snapshot) => {
      const updatedPenemuan = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setPenemuan(updatedPenemuan);
    });

    fetchData();

    return () => {
      unsubscribeKehilangan();
      unsubscribePenemuan();
    };
  }, [fetchData]);

  const deleteReport = async (id, collectionName) => {
    try {
      await deleteDoc(doc(db, collectionName, id));
      return true;
    } catch (error) {
      console.error('Error deleting document: ', error);
      return false;
    }
  };

  return (
    <DataContext.Provider value={{
      kehilangan,
      penemuan,
      loading,
      fetchData,
      deleteReport
    }}>
      {children}
    </DataContext.Provider>
  );
}

function AdminHomeScreen() {
  const { kehilangan, penemuan, loading, deleteReport } = useContext(DataContext);
  const [selectedMenu, setSelectedMenu] = useState('Kehilangan'); 
  const [refreshing, setRefreshing] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedItem, setSelectedItem] = useState(null);
  const [fadeAnim] = useState(new Animated.Value(0)); 

  const onRefresh = useCallback(async () => {
    setRefreshing(true);
    setRefreshing(false);
  }, []);

  const dataToDisplay = selectedMenu === 'Kehilangan' ? kehilangan : penemuan;
  const filteredData = dataToDisplay.filter((item) =>
    item.itemName.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleWhatsApp = (phoneNumber) => {
    const url = `https://wa.me/${phoneNumber}`;
    Linking.openURL(url).catch((err) => console.error('Error opening WhatsApp:', err));
  };

  const openModal = (item) => {
    setSelectedItem(item);
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 300,
      useNativeDriver: true,
    }).start();
  };

  const closeModal = () => {
    Animated.timing(fadeAnim, {
      toValue: 0,
      duration: 300,
      useNativeDriver: true,
    }).start(() => setSelectedItem(null));
  };

  const confirmDelete = (id) => {
    const collectionName = selectedMenu === 'Kehilangan' ? 'Barang Hilang' : 'Barang Ditemukan';
    Alert.alert(
      'Konfirmasi Hapus',
      'Apakah Anda yakin ingin menghapus laporan ini?',
      [
        { text: 'Batal', style: 'cancel' },
        {
          text: 'Hapus',
          onPress: async () => {
            const success = await deleteReport(id, collectionName);
            if (success) {
              Alert.alert('Berhasil', 'Laporan berhasil dihapus.');
            } else {
              Alert.alert('Gagal', 'Terjadi kesalahan saat menghapus laporan.');
            }
          },
          style: 'destructive',
        },
      ]
    );
  };

  if (loading) {
    return (
      <View style={tw`flex-1 justify-center items-center`}>
        <Text>Memuat data...</Text>
      </View>
    );
  }

  return (
    <View style={tw`flex-1 pt-12 px-5 bg-gray-100`}>
      <Text style={tw`text-2xl font-bold mb-5`}>Admin</Text>

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
          <View style={tw`flex-row items-center justify-between p-4 mb-4 bg-white rounded-xl shadow-lg`}>
            <TouchableOpacity
              style={tw`flex-1`}
              onPress={() => openModal(item)}
            >
              <Text style={tw`text-lg font-bold`}>{item.itemName}</Text>
              <Text style={tw`italic text-sm text-gray-600`}>
                Lokasi: {selectedMenu === 'Penemuan' ? item.locationFound : item.locationLost}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => confirmDelete(item.id)}>
              <Icon name="trash-bin" size={24} color="red" />
            </TouchableOpacity>
          </View>
        )}
        refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
        showsVerticalScrollIndicator={false}
      />

      {selectedItem && (
        <Modal transparent visible={!!selectedItem} animationType="none">
          <Animated.View
            style={[
              tw`flex-1 justify-center items-center bg-black bg-opacity-50`,
              { opacity: fadeAnim },
            ]}
          >
            <TouchableOpacity
              style={tw`absolute top-0 left-0 right-0 bottom-0`}
              onPress={closeModal}
            />
            <View style={tw`w-4/5 bg-white rounded-2xl p-5`}>
              <Text style={tw`text-2xl font-bold mb-5 text-center text-[#000000]`}>
                {selectedItem.itemName}
              </Text>
              <Text style={tw`text-base mb-5 text-center text-gray-700`}>
                {selectedItem.itemDescription}
              </Text>
              <Text style={tw`italic font-bold text-sm text-gray-600`}>
                Lokasi: {selectedMenu === 'Penemuan' ? selectedItem.locationFound : selectedItem.locationLost}
              </Text>
              <View style={tw`flex-row items-center justify-end`}>
                <Text style={tw`text-sm font-bold mr-4 text-[#000000]`}>Hubungi:</Text>
                <TouchableOpacity
                  style={tw`w-10 h-10 bg-[#fff] rounded-full flex items-center justify-center`}
                  onPress={() => handleWhatsApp(selectedItem.phoneNumber)}
                >
                  <Image
                    source={require('../assets/whatsapp-icon.png')}
                    style={tw`w-10 h-10`}
                  />
                </TouchableOpacity>
              </View>
            </View>
          </Animated.View>
        </Modal>
      )}
    </View>
  );
}



const Tab = createBottomTabNavigator();

export default function AdminScreen() {
  return (
    <DataProvider>
      <Tab.Navigator
        screenOptions={{
          tabBarStyle: tw`bg-[#0F254F] h-16 rounded-t-3xl shadow-md`,
          tabBarActiveTintColor: 'white',
          tabBarInactiveTintColor: 'gray',
          tabBarLabelStyle: tw`text-sm font-medium`,
          tabBarIconStyle: tw`mt-1`,
        }}
      >
        <Tab.Screen
          name="Home"
          component={AdminHomeScreen}
          options={{
            headerShown: false,
            tabBarIcon: ({ color, size }) => (
              <Icon name="home" size={size + 3} color={color} />
            ),
            tabBarLabel: () => <Text style={tw`text-white text-sm font-medium`}>Home</Text>,
          }}
        />
        <Tab.Screen
          name="Profile"
          component={AdminProfileScreen}
          options={{
            headerShown: false,
            tabBarIcon: ({ color, size }) => (
              <Icon name="person" size={size + 3} color={color} />
            ),
            tabBarLabel: () => <Text style={tw`text-white text-sm font-medium`}>Profile</Text>,
          }}
        />
      </Tab.Navigator>
    </DataProvider>
  );
}