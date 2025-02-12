import { StyleSheet, Image, View, Text } from 'react-native';

import tw from 'twrnc';

import LogoPartVortex from '@/assets/images/vortex.svg';
import LogoPy from '@/assets/images/python-original.svg';

export default function TabTwoScreen() {
  return (
    <View className='tab-home-container' style={tw`relative bg-red w-full h-full`}>
      <Image source={require('@/assets/images/Background_options.png')} style={{
        width: '100%',
        height: '100%',
        position: 'absolute',
        top: 0,
        left: 0,
        zIndex: -1,
      }}/>
      <View className='tab-banner-content' style={tw`flex flex-col z-0 h-full w-full items-center gap-[1rem] top-1/15`}>
        <View style={tw`flex w-full relative items-center flex-col gap-3`}>
          <View style={tw`w-[100px] h-[100px] bg-[#BB3232] relative rounded-full shadow-lg shadow-black`}>
            <LogoPartVortex width={100} height={100} />
          </View>
          <Text style={{
            position: 'relative',
            fontFamily: 'UnicaOne',
            fontSize: 40,
            color: '#fff',
            textShadowColor: 'rgba(0, 0, 0, 0.25)',
            textShadowOffset: {width: 0, height: 4},
            textShadowRadius: 16,
            paddingBottom: 10,
            width: '100%',
            textAlign: 'center',
          }}>CodeVortex</Text>
        </View>
        <View className='tab-project-list'>
          <Text style={{
            position: 'relative',
            fontFamily: 'AlbertSans',
            fontSize: 16,
            color: '#fff',
          }}>Your recent projects:</Text>
          <View className='pl-box'>
            <View className='pl-box-item'>
              <View className='pl-box-item-wrap'>
                
              </View>
              <View className='pl-box-item-wrap'>
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    color: '#808080',
    bottom: -90,
    left: -35,
    position: 'absolute',
  },
  titleContainer: {
    flexDirection: 'row',
    gap: 8,
  },
});
