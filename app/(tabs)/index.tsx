import { Image, StyleSheet, Platform, Text } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

import tw from 'twrnc';

export default function HomeScreen() {
  return (
    <ThemedView className='tab-home-container' style={tw`absolute h-full flex flex-col`}>
      <ThemedView className='tab-home-background' style={tw`absolute top-0 left-0 w-full h-full`}>
        <Image source={require('@/assets/images/Background.png')} />
      </ThemedView>
      <ThemedView className="tab-banner-content" style={tw`absolute w-full h-full flex justify-center items-center`}>
        <Image source={require('@/assets/images/logo.svg')} style={tw`w-[64px] h-[64px] border-2 border-white rounded-full`} />
      </ThemedView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});
