import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Modal from 'react-native-modal';
import LostItemForm from './LostItemForm';
import FoundItemForm from './FoundItemForm';
import tw from 'twrnc';  // Importing twrnc for styling

export default function HomeScreen() {
  const [isLostModalVisible, setLostModalVisible] = useState(false);
  const [isFoundModalVisible, setFoundModalVisible] = useState(false);

  return (
    <View style={tw`flex-1 items-center pt-10 bg-white`}>
      <Text style={tw`absolute top-12 left-5 text-2xl font-bold`}>Home</Text>

      <View style={tw`bg-[#0F254F] py-2 px-8 rounded-xl items-center mb-5 mt-16 w-11/12`}>
        <Text style={tw`text-4xl font-bold text-white mt-2`}>Welcome!</Text>
        <Text style={tw`text-lg text-white mt-4 mb-6`}>"Bringing Lost Items Back to You"</Text>
      </View>

      <Text style={tw`font-bold text-xl mt-5`}>What Do You Want To Report?</Text>

      <View style={tw`flex-row justify-around w-full px-5 mt-5`}>
        <TouchableOpacity
          style={tw`items-center justify-center w-24 h-24 bg-[#0F254F] rounded-xl mx-2`}
          onPress={() => setLostModalVisible(true)}
        >
          <Text style={tw`text-white text-center font-bold text-lg`}>Lost Item</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={tw`items-center justify-center w-24 h-24 bg-[#0F254F] rounded-xl mx-2`}
          onPress={() => setFoundModalVisible(true)}
        >
          <Text style={tw`text-white text-center font-bold text-lg`}>Found Item</Text>
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
