import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Gameboard from './components/gameboard';

export default function App() {
   return (
      <View style={styles.container}>
         <GameProvider>
            <Gameboard />
         </GameProvider>
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
