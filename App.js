import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import RegistartionScreen from './Screens/RegistrationScreen';

export default function App() {
  return (
    <View style={styles.container}>
      {/* <Text>goit-react_native-hw-v2</Text> */}
      <StatusBar style="auto" />
      <RegistartionScreen />
    </View>
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
