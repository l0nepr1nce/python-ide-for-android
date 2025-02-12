import { TouchableOpacity, Image, StyleSheet, Text, View } from 'react-native';

import LogoPartVortex from '@/assets/images/vortex.svg';

import tw from 'twrnc';

import FontAwesome6 from '@react-native-vector-icons/fontawesome6';
const icon = <FontAwesome6 name="bell" iconStyle="solid" />;

export default function HomeScreen() {
  return (
    <View  style={tw`relative w-full h-full`}>
      {icon}
    </View>
  );
}