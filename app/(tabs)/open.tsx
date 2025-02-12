import { TouchableOpacity, Image, StyleSheet, Text, View } from 'react-native';

import tw from 'twrnc';

export default function HomeScreen() {
  return (
    <View className='tab-home-container' style={tw`relative w-full h-full`}>
      <Image source={require('@/assets/images/Background_options.png')} style={{
        width: '100%',
        height: '100%',
        position: 'absolute',
        top: 0,
        left: 0,
        zIndex: -1,
      }}/>
      <View style={tw`flex flex-col relative w-full h-full gap-1/4 items-center top-1/5`}>
        <Text style={{
              fontFamily: 'AlbertSans',
              fontSize: 20,
              color: 'white',
              fontWeight: '300',
            }}> What would you like to open? </Text>
        <View style={tw`gap-5`}>
            <TouchableOpacity style={styles.button}><Text style={styles.buttonText}>File</Text></TouchableOpacity>
            <TouchableOpacity style={styles.button}><Text style={styles.buttonText}>Folder</Text></TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    width: 150,
    backgroundColor: 'rgba(39, 39, 39, 0.48)',
    aspectRatio: '3',
    borderRadius: 20,
    justifyContent: 'center',

  },
  buttonText: {
    fontFamily: 'AlbertSans',
    fontSize: 20,
    color: 'white',
    fontWeight: '200',
    textAlign: 'center',
    opacity: 1,
    userSelect: 'none',
  },


});