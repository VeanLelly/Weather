import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import DetalhesScreen from './screens';
import Weather from './components/weather';
import { LinearGradient } from 'expo-linear-gradient';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <LinearGradient colors={['#A2C2E2', '#B9D6E6', '#CFE7F3']}>
        <View>
          <Weather />
          <StatusBar style="auto" />
        </View>
      </LinearGradient>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {

  },

});
