import { StyleSheet, Image, View, Text, ScrollView, TouchableOpacity } from 'react-native';

import tw from 'twrnc';

import ExploreMenuPlank from '@/components/ui/ExploreMenuPlank';
import TouchableButton from '@/components/ui/TouchableButton';
import React from 'react';
import AppView from '@/components/ui/AppView';

export default function TabTwoScreen() {
  return (
    <AppView backgroundType='gray'>
      <View className='tab-project-list' style={tw`w-full flex flex-col gap-3 items-center flex-2`}>
          <Text style={{
          position: 'relative',
          fontFamily: 'AlbertSans',
          fontSize: 16,
          color: '#fff',
        }}>Your recent projects:</Text>
        <ScrollView className='pl-box' style={tw`w-full flex flex-col gap-1 overflow-scroll`}>
          <ExploreMenuPlank />
          <ExploreMenuPlank />
          <ExploreMenuPlank />
          <ExploreMenuPlank />
          <ExploreMenuPlank />
          <ExploreMenuPlank />
          <ExploreMenuPlank />
        </ScrollView>
      </View>
      <TouchableButton title='Clear History' style={{
        marginTop: 'auto',
        marginBottom: 100,
      }} />
    </AppView>
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
