import { Image, StyleSheet, Platform, Text, View } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

import LogoPartVortex from '@/assets/images/vortex.svg';

import tw from 'twrnc';
import Button from '@/components/ui/Button';

export default function HomeScreen() {
  /*return (
    <ThemedView className='tab-home-container' style={tw`absolute h-full flex flex-col`}>
      <ThemedView className='tab-home-background' style={tw`absolute top-0 left-0 w-full h-full`}>
        <Image source={require('@/assets/images/Background.png')} />
      </ThemedView>
      <ThemedView className="tab-banner-content" style={tw`absolute w-full h-full flex justify-center items-center`}>
        <Image source={require('@/assets/images/logo.svg')} style={tw`w-[64px] h-[64px] border-2 border-white rounded-full`} />
      </ThemedView>
    </ThemedView>
  );*/
  return (
    <View className='tab-home-container' style={tw`relative bg-red w-full h-full`}>
      <Image source={require('@/assets/images/Background.png')} style={{
        width: '100%',
        height: '100%',
        position: 'absolute',
        top: 0,
        left: 0,
        zIndex: -1,
      }}/>
      <View className='tab-banner-content' style={tw`z-0 h-full w-full flex justify-center items-center gap-[10px] p-[20px]`}>
        <View style={tw`w-[100px] h-[100px] relative bg-[#BB3232] rounded-full shadow-lg shadow-black mt-auto`}>
          <LogoPartVortex width={100} height={100} style={tw`mt-[5px]`} />
        </View>
        <Text style={{
          fontFamily: 'UnicaOne',
          fontSize: 40,
          color: 'white',
          textShadowColor: 'rgba(0, 0, 0, 0.25)',
          textShadowOffset: {width: 0, height: 4},
          textShadowRadius: 16,
          paddingBottom: 10,
          width: '100%',
          textAlign: 'center',
        }}>CodeVortex</Text>
        <View className='sidelined-text' style={styles.sidelinedText}>
          <View className='sidelined-text-line' style={styles.sidelinedTextLine}></View>
          <Text className='sidelined-text-label' style={{
            fontFamily: 'AlbertSans',
            fontSize: 20,
            color: 'white',
            opacity: 0.75,
            textTransform: 'uppercase',
            paddingHorizontal: 10,
          }}>Welcome</Text>
          <View className='sidelined-text-line' style={styles.sidelinedTextLine}></View>
        </View>
        <Text style={{
          fontFamily: 'AlbertSans',
          fontSize: 20,
          color: 'white',
          textAlign: 'center',
          marginTop: 20,
        }}>A powerful Python IDE{'\n'}for all your mobile devices!</Text>
        <Button>Get Started</Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  sidelinedText: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    width: '100%',
  },
  sidelinedTextLine: {
    width: '100%',
    flex: 1,
    height: 1,
    backgroundColor: 'white',
  },
});
