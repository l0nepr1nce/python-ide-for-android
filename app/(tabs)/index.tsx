import { Image, StyleSheet, Platform } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import Button from '@/components/ui/Button';

export default function HomeScreen() {
  return (
    <div className='tab-container'>
      <div className='tab-home-bg fixed w-full h-full'>
        <Image
          source={require('@/assets/images/Background.png')}
          alt=''
          style={{height: '100%', width: 'auto', zIndex: '-1'}}
        />
      </div>
      <div className='tab-welcome-banner p-[2rem] pb-[10rem] pt-[25vh] relative h-[100vh] gap-[20vh] flex flex-col justify-center items-center z-0' style={styles.albertSans}>
        <div className="tab-banner-wrapper flex flex-col items-center w-full mb-auto">
          <div className="shadow-s">
            <Image
              source={require('@/assets/images/logo.svg')}
              alt=''
            />
          </div>
          <h1 style={styles.unicaFont} className='text-[#fff] text-[4rem] text-shadow-s'>CodeVortex</h1>
          <div className="sidelined-text mt-[1.5rem] mb-[2rem]">
            <div></div>
            <h2 className='text-[2.4rem] sl-mid text-[rgba(255,255,255,.75)] font-light'>Welcome</h2>
            <div></div>
          </div>
          <p className='text-center text-[#fff] text-[2rem]'>A powerful Python IDE<br></br>for all your mobile devices!</p>
        </div>
        <Button>Get Started</Button>
      </div>
    </div>
  );
}

const styles = StyleSheet.create({
  unicaFont: {
    fontFamily: 'UnicaOne'
  },
  albertSans: {
    fontFamily: 'AlbertSans'
  },
});

/*const styles = StyleSheet.create({
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
});*/