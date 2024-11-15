import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default function ProfileScreen() {
  const navigation = useNavigation();

  const handleLogout = () => {
    navigation.navigate('Login');
  };

  return (
    <View style={styles.container}>
      <View style={styles.profileContainer}>
        <View style={styles.avatarContainer}>
          <Icon name="person" size={40} color="#808080" />
        </View>
        <Text style={styles.name}>ALDI AHMAD DANI</Text>
        <Text style={styles.id}>232410103074</Text>
      </View>

      <TouchableOpacity style={styles.historyButton}>
        <Icon name="history" size={24} color="#000" style={styles.historyIcon} />
        <Text style={styles.historyText}>Riwayat Laporan</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={handleLogout}>
        <Text style={styles.buttonText}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  profileContainer: {
    width: '100%',
    alignItems: 'center',
    backgroundColor: '#000033',
    paddingVertical: 30,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  avatarContainer: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: '#D9D9D9',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 5,
  },
  id: {
    fontSize: 16,
    color: '#fff',
  },
  historyButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F5F5F5',
    padding: 15,
    borderRadius: 10,
    width: '90%',
    marginTop: 20,
  },
  historyIcon: {
    marginRight: 10,
  },
  historyText: {
    fontSize: 16,
    color: '#000',
  },
  button: {
    position: 'absolute',
    bottom: 80,
    width: 150,
    height: 40,
    backgroundColor: '#FF2626',
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 15,
    fontWeight: 'bold',
  },
  navbar: {
    position: 'absolute',
    bottom: 0,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#000033',
    width: '100%',
    height: 60,
    paddingBottom: 10,
  },
  navItem: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 10,
  },
});
