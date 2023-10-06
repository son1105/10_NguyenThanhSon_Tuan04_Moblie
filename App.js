import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import _2a from './screens/_2a';
import _2b from './screens/_2b';
import _2c from './screens/_2c';
import Tiki_Ok from './screens/Tiki_Ok';

export default function App() {
  return (
    // _2a()
    // _2b()
    // _2c()
    Tiki_Ok()
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
