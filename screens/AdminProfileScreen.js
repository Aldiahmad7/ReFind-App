import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import tw from 'twrnc';

export default function AdminProfileScreen() {
  return (
    <View style={tw`flex-1 pt-12 px-5 bg-gray-100`}>
      <Text style={tw`text-2xl font-bold mb-5 text-[#000000]`}>Profile Admin</Text>
      <View
        style={[
          tw`w-full items-center py-8 rounded-b-2xl`,
          { backgroundColor: '#0F254F', shadowColor: '#000', shadowOpacity: 0.2, shadowRadius: 5, elevation: 5 },
        ]}
      >
        <View
          style={[
            tw`w-20 h-20 bg-[#D9D9D9] rounded-full justify-center items-center mb-2`,
            { shadowColor: '#000', shadowOpacity: 0.2, shadowRadius: 5, elevation: 3 },
          ]}
        >
          <Icon name="person" size={40} color="#808080" />
        </View>
        <Text style={tw`text-white text-2xl font-bold mb-1`}>ADMIN</Text>
      </View>
      
      <View
        style={[
          tw`w-full px-5 py-4 rounded-2xl mt-5 flex-row items-center`,
          { backgroundColor: '#FFFFFF', shadowColor: '#000', shadowOpacity: 0.1, shadowRadius: 3, elevation: 2 },
        ]}
      >
        <Icon name="history" size={30} color="#0F254F" style={tw`mr-3`} />
        <Text style={tw`text-lg font-semibold text-[#0F254F]`}>Histori Deleted</Text>
      </View>
      
      <View style={tw`flex-1 justify-end items-center pb-10`}>
        <TouchableOpacity
          style={[
            tw`w-36 h-10 rounded-xl justify-center items-center`,
            { backgroundColor: '#FF2626', shadowColor: '#000', shadowOpacity: 0.2, shadowRadius: 5, elevation: 3 },
          ]}
        >
          <Text style={tw`text-white text-lg font-bold`}>Logout</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
