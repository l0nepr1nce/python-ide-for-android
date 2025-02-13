import { TouchableOpacity, Image, StyleSheet, Text, View } from 'react-native';

import LogoPartVortex from '@/assets/images/vortex.svg';

import tw from 'twrnc';

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons/faUser'

export default function HomeScreen() {
  return (
    <View  style={tw`relative w-full h-full`}>
      <FontAwesomeIcon icon={faUser} />
    </View>
  );
}