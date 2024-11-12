import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

export default function LostItemForm({ onClose }) {
  return (
    <View style={styles.modalContent}>
      <Text style={styles.header}>PENEMUAN</Text>
      <TextInput style={styles.input} placeholder="Nama Barang" />
      <TextInput style={styles.input} placeholder="Deskripsi Barang" />
      <TextInput style={styles.input} placeholder="Lokasi Ditemukan" />
      <TextInput style={styles.input} placeholder="No. HP" />
      <TouchableOpacity style={styles.uploadButton}>
        <Text style={styles.uploadButtonText}>Upload File</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.submitButton} onPress={onClose}>
        <Text style={styles.submitButtonText}>SUBMIT</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  modalContent: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000000',
    textAlign: 'center',
    marginBottom: 10,
  },
  input: {
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    marginBottom: 10,
  },
  uploadButton: {
    backgroundColor: '#ccc',
    width: '40%',
    height: 33,
    alignItems: 'center',
    marginBottom: 20,
    marginTop: 10,
    left: 83,
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  uploadButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  submitButton: {
    backgroundColor: '#4CAF50',
    padding: 10,
    borderRadius: 10,
    alignItems: 'center',
  },
  submitButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});
