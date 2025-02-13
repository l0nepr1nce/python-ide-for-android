import { View, Text, Image } from "react-native";

import tw from 'twrnc';

import LogoPartVortex from '@/assets/images/vortex.svg';

interface AppViewProps {
    children?: React.ReactNode;
    backgroundType: 'red' | 'gray';
}

export default function AppView({ children, backgroundType }: AppViewProps) {
  return (
    <View className='tab-home-container' style={tw`relative bg-red w-full h-full`}>
      <Image source={
        backgroundType === 'red' ? require('@/assets/images/Background.png') : require('@/assets/images/Background_options.png')
      } style={{
        width: '100%',
        height: '100%',
        position: 'absolute',
        top: 0,
        left: 0,
        zIndex: -1,
      }}/>
      <View className='tab-banner-content' style={tw`h-full flex flex-col items-center gap-4 pt-[60px] px-[20px]`}>
        <View className='tab-banner-logo-wrap' style={tw`flex w-full relative items-center flex-col gap-3 flex-1 overflow-hidden`}>
          <View className='tab-banner-logo-icon' style={tw`max-w-[100px] max-h-[100px] flex justify-center items-center h-full aspect-square bg-[#BB3232] relative rounded-full shadow-lg shadow-black flex-1`}>
            <LogoPartVortex width={100} height={100} />
          </View>
          <Text className='tab-banner-logo-text' style={{
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
        {children}
      </View>
    </View>
  );
}
