import { SafeAreaProvider } from 'react-native-safe-area-context';
import Editor from '../../components/ui/Editor';
import { StatusBar, StyleSheet } from 'react-native';

export default function HomeScreen() {
  return (
    <SafeAreaProvider style={styles.container}>
        <StatusBar barStyle="light-content" />
        <Editor />
      </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
      backgroundColor: '#fff',
  },
});