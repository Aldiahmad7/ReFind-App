import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import Modal from 'react-native-modal';
import LostItemForm from './LostItemForm';
import FoundItemForm from './FoundItemForm';
import tw from 'twrnc';

export default function HomeScreen() {
  const [isLostModalVisible, setLostModalVisible] = useState(false);
  const [isFoundModalVisible, setFoundModalVisible] = useState(false);

  return (
    <View style={tw`flex-1 bg-white p-5`}>
      {/* Header */}
      <View style={tw`flex-row justify-between items-center mb-8`}>
        <Text style={tw`text-2xl font-bold mt-7`}>Home</Text>
      </View>

      {/* Welcome Card */}
      <View style={tw`bg-[#0F254F] p-5 rounded-3xl mb-12`}>
        <View style={tw`flex-row justify-between items-center`}>
          <View>
            <Text style={tw`text-white text-3xl font-bold mb-2`}>Welcome!</Text>
            <Text style={tw`text-white text-base`}>"Bringing Lost Items</Text>
            <Text style={tw`text-white text-base`}>Back to You"</Text>
          </View>
          <Image
            source={require('../assets/logo.png')}
            style={tw`w-20 h-20`}
            resizeMode="contain"
          />
        </View>
      </View>

      {/* Report Section */}
      <Text style={tw`text-xl font-bold text-center mb-6`}>What Do You Want To Report?</Text>

      <View style={tw`flex-row flex-wrap justify-between px-4 space-y-6`}>
        <TouchableOpacity
          style={tw`bg-[#0F254F] w-33 h-33 rounded-3xl items-center justify-center p-4`}
          onPress={() => setLostModalVisible(true)}
        >
          <View style={tw`flex-col items-center justify-center`}>
            <Image
              source={require('../assets/lost-icon.png')}
              style={tw`w-14 h-14`}
              resizeMode="contain"
            />
            <Text style={tw`text-white text-lg font-bold mt-2 text-center`}>Lost Item</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          style={tw`bg-[#0F254F] w-33 h-33 rounded-3xl items-center justify-center p-4`}
          onPress={() => setFoundModalVisible(true)}
        >
          <View style={tw`flex-col items-center justify-center`}>
            <Image
              source={require('../assets/found-icon.png')}
              style={tw`w-14 h-14`}
              resizeMode="contain"
            />
            <Text style={tw`text-white text-lg font-bold mt-2 text-center`}>Found Item</Text>
          </View>
        </TouchableOpacity>
      </View>

      {/* Modals */}
      <Modal isVisible={isLostModalVisible} onBackdropPress={() => setLostModalVisible(false)}>
        <LostItemForm onClose={() => setLostModalVisible(false)} />
      </Modal>

      <Modal isVisible={isFoundModalVisible} onBackdropPress={() => setFoundModalVisible(false)}>
        <FoundItemForm onClose={() => setFoundModalVisible(false)} />
      </Modal>
    </View>
  );
}
