import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList } from 'react-native';

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
    <View style={styles.container}>
      <Text style={styles.text}>Search</Text>
      <View style={styles.menuContainer}>
        <TouchableOpacity
          style={[
            styles.menuButton,
            selectedMenu === 'Kehilangan' && styles.selectedMenuButton,
            { borderTopLeftRadius: 10, borderBottomLeftRadius: 10 },
          ]}
          onPress={() => setSelectedMenu('Kehilangan')}
        >
          <Text style={[styles.menuText, selectedMenu === 'Kehilangan' && styles.selectedMenuText]}>
            Kehilangan
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.menuButton,
            selectedMenu === 'Penemuan' && styles.selectedMenuButton,
            { borderTopRightRadius: 10, borderBottomRightRadius: 10 },
          ]}
          onPress={() => setSelectedMenu('Penemuan')}
        >
          <Text style={[styles.menuText, selectedMenu === 'Penemuan' && styles.selectedMenuText]}>
            Penemuan
          </Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={dataToDisplay}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.itemContainer}>
            <Text style={styles.itemName}>{item.name}</Text>
            <Text style={styles.itemDescription}>{item.description}</Text>
            <Text style={styles.itemReportedBy}>Dilaporkan oleh: {item.reportedBy}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 20,
    backgroundColor: '#ffffff',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    // color: '#000000',
    marginBottom: 20,
  },
  menuContainer: {
    flexDirection: 'row',
    height: 40,
    width: 200,
    marginBottom: 20,
    borderRadius: 120,
    left: 60,
    backgroundColor: '#E0E0E0',
    overflow: 'hidden',
  },
  menuButton: {
    flex: 1,
    paddingVertical: 10,
    alignItems: 'center',
  },
  selectedMenuButton: {
    backgroundColor: '#0F254F',
  },
  menuText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#0F254F',
  },
  selectedMenuText: {
    color: '#FFFFFF',
  },
  itemContainer: {
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  itemName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  itemDescription: {
    fontSize: 14,
    color: '#666',
  },
  itemReportedBy: {
    fontSize: 12,
    color: '#333',
    fontStyle: 'italic',
  },
});
