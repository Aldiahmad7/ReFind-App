import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import tw from 'twrnc';
import { useNavigation } from '@react-navigation/native';
import { auth } from '../firebase/firebaseConfig';

export default function AdminProfileScreen() {
    const navigation = useNavigation();
  
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
      
      <TouchableOpacity
        style={[
          tw`flex-row items-center p-4 rounded-xl w-full mt-5`,
          { backgroundColor: '#F5F5F5', shadowColor: '#000', shadowOpacity: 0.1, shadowRadius: 5, elevation: 2 },
        ]}
      >
        <Icon name="history" size={24} color="#000000" style={tw`mr-3`} />
        <Text style={tw`text-lg text-[#000000] font-medium`}>History Deleted</Text>
      </TouchableOpacity>
      
      <View style={tw`flex-1 justify-end items-center pb-10`}>
        <TouchableOpacity
          style={[
            tw`w-36 h-10 rounded-xl justify-center items-center`,
            { backgroundColor: '#FF2626', shadowColor: '#000', shadowOpacity: 0.2, shadowRadius: 5, elevation: 3 },
          ]}
          onPress={() => {
            auth.signOut();
            navigation.navigate('Login');
          }}
          >
          <Text style={tw`text-white text-lg font-bold`}>Logout</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
