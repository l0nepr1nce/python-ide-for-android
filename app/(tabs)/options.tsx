import { TouchableOpacity, Image, StyleSheet, Text, View } from 'react-native';

import LogoPartVortex from '@/assets/images/vortex.svg';

import tw from 'twrnc';
import AppView from '@/components/ui/AppView';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';

import { faClockRotateLeft, faFolderOpen, faFolderPlus } from '@fortawesome/free-solid-svg-icons';

export default function HomeScreen() {
  /*return (
    <View className='tab-home-container' style={tw`relative w-full h-full`}>
      <Image source={require('@/assets/images/Background_options.png')} style={{
        width: '100%',
        height: '100%',
        position: 'absolute',
        top: 0,
        left: 0,
        zIndex: -1,
      }}/>
      <View className='tab-banner-content' style={tw`flex flex-col z-0 h-full w-full items-center gap-1/15 top-1/15`}>
        <View style={tw`flex w-full relative items-center flex-col gap-3`}>
          <View style={tw`w-[100px] h-[100px] bg-[#BB3232] relative rounded-full shadow-lg shadow-black`}>
            <LogoPartVortex width={100} height={100} />
          </View>
          <Text style={{
            position: 'relative',
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
        </View>
        <View style={tw`flex flex-col relative items-center w-full h-full gap-4`}>
          <View style={tw`flex items-center`}>
            <Text style={{
              fontFamily: 'AlbertSans',
              fontSize: 20,
              color: 'white',
              fontWeight: '300',
            }}> What would you like to do? </Text>

          </View>
          <View className='teb-options-container' style={{
            display: 'flex',
            position:'relative',
            justifyContent: 'center',
            flexDirection: 'column',
            height: '40%',
            aspectRatio: '1/1',
            borderRadius: 41,
            backgroundColor: 'rgba(121, 121, 121, 0.45)', 
            gap: '3%',
          }}>  
            <View style={tw`flex absolute flex-row relative gap-[3%] w-[100%] justify-center`}>
              <TouchableOpacity style={styles.buttonTop}> <Text style={styles.buttonText}>Open{'\n'}latest</Text></TouchableOpacity>
              <TouchableOpacity style={styles.buttonTop}> <Text style={styles.buttonText}>Open</Text></TouchableOpacity>
            </View>
            <View style={tw`flex relative w-[100%] items-center`}>
              <TouchableOpacity style={styles.buttonBottom}> <Text style={styles.buttonText}>Create new</Text></TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </View>
  );*/
  return (
    <AppView backgroundType='gray'>
      <View className='tab-options-wrapper' style={{
        flex: 3,
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
        gap: 16,
        paddingHorizontal: 16,
        paddingVertical: 16,
      }}>
        <Text style={{
          fontFamily: 'AlbertSans',
          fontSize: 20,
          color: 'white',
          fontWeight: '300',
          textAlign: 'center',
        }}> What would you like to do? </Text>
        <View className='teb-options-container' style={{
          display: 'flex',
          position:'relative',
          justifyContent: 'center',
          flexDirection: 'column',
          height: '50%',
          aspectRatio: '1/1',
          borderRadius: 41,
          backgroundColor: 'rgba(121, 121, 121, 0.45)', 
          gap: '3%',
        }}>  
          <View className='options-menu-container' style={tw`flex relative flex-row relative gap-[3%] w-[100%] justify-center`}>
            <TouchableOpacity className='options-menu-button' style={styles.buttonTop}>
              <FontAwesomeIcon style={styles.buttonIcon} icon={faClockRotateLeft} color='#fff' size={50} />
              <Text className='options-menu-button-text' numberOfLines={1} style={styles.buttonText}>Open latest</Text>
            </TouchableOpacity>
            <TouchableOpacity className='options-menu-button' style={styles.buttonTop}>
              <FontAwesomeIcon style={styles.buttonIcon} icon={faFolderOpen} color='#fff' size={50} />
              <Text className='options-menu-button-text' numberOfLines={1} style={styles.buttonText}>Open</Text>
            </TouchableOpacity>
          </View>
          <View className='options-menu-container' style={tw`flex relative w-[100%] items-center`}>
            <TouchableOpacity className='options-menu-button' style={styles.buttonBottom}>
              <FontAwesomeIcon style={styles.buttonIcon} icon={faFolderPlus} color='#fff' size={50} />
              <Text className='options-menu-button-text' numberOfLines={1} style={styles.buttonText}>Create new</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </AppView>
  )
}

const styles = StyleSheet.create({
  buttonTop: {
    width: '40%',
    backgroundColor: 'rgba(39, 39, 39, 0.48)',
    aspectRatio: '1/1',
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
  },
  buttonBottom: {
    position : 'relative',
    width: '83%',
    aspectRatio: 2.23,
    borderRadius: 20,
    backgroundColor: 'rgba(39, 39, 39, 0.48)',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
  },
  buttonText: {
    fontFamily: 'AlbertSans',
    fontSize: 16,
    color: 'white',
    fontWeight: '200',
    textAlign: 'center',
    marginTop: 10,
  },
  buttonIcon: {
    opacity: 1,
  },
});