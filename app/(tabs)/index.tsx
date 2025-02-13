import { Image, StyleSheet, Text, View } from 'react-native';

import LogoPartVortex from '@/assets/images/vortex.svg';

import tw from 'twrnc';
import TouchableButton from '@/components/ui/TouchableButton';
import AppView from '@/components/ui/AppView';

export default function HomeScreen() {
  return (
    <AppView backgroundType='red'>
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
        fontFamily: 'SpaceMono',
        fontSize: 20,
        color: 'white',
        textAlign: 'center',
        marginTop: 'auto',
        flex: 1,
      }}>A powerful Python IDE{'\n'}for all your mobile devices!</Text>
      <TouchableButton style={{
        marginTop: 'auto',
        marginBottom: 100,
      }} title='Get Started' />
    </AppView>
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
