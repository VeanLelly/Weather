import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import Weather  from './components/weather';

export default function App() {
  return (
<SafeAreaView style={styles.container}>
    <View>
     <Weather/>
      <StatusBar style="auto" />
    </View>
</SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    margin:10
   
  },
 
});
