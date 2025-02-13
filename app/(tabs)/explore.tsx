import { StyleSheet, Image, View, Text, ScrollView, TouchableOpacity } from 'react-native';

import tw from 'twrnc';

import LogoPartVortex from '@/assets/images/vortex.svg';

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faPython } from '@fortawesome/free-brands-svg-icons/faPython'
import ExploreMenuPlank from '@/components/ui/ExploreMenuPlank';
import Button from '@/components/ui/Button';
import TouchableButton from '@/components/ui/TouchableButton';

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
        <View className='tab-project-list' style={tw`w-full px-[10px] flex flex-col gap-3 items-center`}>
          <Text style={{
            position: 'relative',
            fontFamily: 'AlbertSans',
            fontSize: 16,
            color: '#fff',
          }}>Your recent projects:</Text>
          <ScrollView className='pl-box' style={tw`w-full p-[10px] flex flex-col gap-1 overflow-scroll h-full max-h-[30%] min-h-[225px]`}>
            <ExploreMenuPlank />
            <ExploreMenuPlank />
            <ExploreMenuPlank />
            <ExploreMenuPlank />
            <ExploreMenuPlank />
            <ExploreMenuPlank />
          </ScrollView>
          <TouchableButton style={{
            marginTop: 'auto',
          }} title='Clear History' />
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
