import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Modal from 'react-native-modal';
import LostItemForm from './LostItemForm';
import FoundItemForm from './FoundItemForm';

export default function HomeScreen() {
  const [isLostModalVisible, setLostModalVisible] = useState(false);
  const [isFoundModalVisible, setFoundModalVisible] = useState(false);

  return (
    <View style={styles.container}>
      <Text style={styles.homeTitle}>Home</Text>
      <View style={styles.welcomeContainer}>
        <Text style={styles.welcomeText}>Welcome!</Text>
        <Text style={styles.subtitle}>"Bringing Lost Items Back to You"</Text>
      </View>
      <Text style={styles.title}>What Do You Want To Report?</Text>
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
      <Modal isVisible={isLostModalVisible} onBackdropPress={() => setLostModalVisible(false)}>
        <LostItemForm onClose={() => setLostModalVisible(false)} />
      </Modal>
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
  welcomeContainer: {
    backgroundColor: '#0F254F', 
    paddingVertical: 5,
    paddingHorizontal: 30,
    borderRadius: 15, 
    alignItems: 'center',
    marginBottom: 20,
    marginTop: 70,
    width: '90%', 
  },
  welcomeText: {
    fontSize: 40,
    fontWeight: 'bold',
    color: '#ffffff', 
    marginTop: 8,
  },
  subtitle: {
    fontSize: 16,
    marginTop: 18,
    marginBottom: 23,
    color: '#ffffff'
  },
  title:{
    fontWeight:'bold',
    fontSize: 18,
    marginTop: 20,
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
    borderRadius: 30,
    marginHorizontal: 10,
  },
  buttonText: {
    fontSize: 15,
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
