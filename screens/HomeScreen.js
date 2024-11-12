import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import LostItemForm from './LostItemForm';
import FoundItemForm from './FoundItemForm';
import Modal from 'react-native-modal';

export default function HomeScreen() {
  const [isLostModalVisible, setLostModalVisible] = useState(false);
  const [isFoundModalVisible, setFoundModalVisible] = useState(false);

  return (
    <View style={styles.container}>
      <Text style={styles.homeTitle}>Home</Text>
      <Text style={styles.title}>Welcome!</Text>
      <Text style={styles.subtitle}>"Bringing Lost Items Back to You"</Text>

      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => setLostModalVisible(true)}
        >
          <Text style={styles.buttonText}>Lost Item</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => setFoundModalVisible(true)}
        >
          <Text style={styles.buttonText}>Found Item</Text>
        </TouchableOpacity>
      </View>

      {/* Modal for Lost Item */}
      <Modal isVisible={isLostModalVisible} onBackdropPress={() => setLostModalVisible(false)}>
        <LostItemForm onClose={() => setLostModalVisible(false)} />
      </Modal>

      {/* Modal for Found Item */}
      <Modal isVisible={isFoundModalVisible} onBackdropPress={() => setFoundModalVisible(false)}>
        <FoundItemForm onClose={() => setFoundModalVisible(false)} />
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 40,
    backgroundColor: '#ffffff',
  },
  homeTitle: {
    justifyContent: 'top',
    position: 'absolute',
    alignItems: 'left',
    marginTop: 50,
    left: 20,
    // marginLeft: 20,
    fontSize: 20,
    fontWeight: 'bold',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#0F254F',
    marginTop: 50, 
  },
  subtitle: {
    fontSize: 16,
    marginBottom: 40,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    paddingHorizontal: 20,
    marginTop: 20,
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 100,
    height: 100,
    backgroundColor: '#0F254F',
    borderRadius: 15,
    marginHorizontal: 10,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
