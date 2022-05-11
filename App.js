import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import CircleAnimation from "./src/CircleAnimation"
export default function App() {
  return (
    <View style={styles.container}>
      <CircleAnimation></CircleAnimation>
      <StatusBar style="auto" />
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
